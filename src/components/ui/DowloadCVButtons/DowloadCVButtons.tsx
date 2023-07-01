import { IconRenderer } from "@/assets/icons/Icon";
import { FC, useState } from "react";
import { Button } from "../Button";
import axios from "axios";
import { ResumeRequest, Resumes, ResumeData, ResumeEnum } from "@/utils/ResumeValidator";
import { Loader2 } from "lucide-react";

export const DowloadCVButtons: FC = () => {
  const [downloadingPdf, setDownloadingPdf] = useState<ResumeEnum | false>(false);

  const downloadPDF = async (resume: ResumeData) => {
    setDownloadingPdf(resume.id);

    const payload: ResumeRequest = {
      id: resume.id,
    };
    const { data, status } = await axios.post<Buffer>("/api/resume", payload, {
      responseType: "arraybuffer", // Ensure the response is treated as an ArrayBuffer
    });
    if (status !== 200) {
      setDownloadingPdf(false);
      return;
    }

    const pdfBlob = new Blob([data], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = pdfUrl;
    downloadLink.download = resume.fileName; // Set the desired filename
    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up by revoking the temporary URL after the download has started
    URL.revokeObjectURL(pdfUrl);

    setDownloadingPdf(false);
  };

  return (
    <>
      <p className="text-lg text-primary">Download my full resume here:</p>
      <div className="flex justify-center gap-2">
        <Button onClick={() => downloadPDF(Resumes.SV)} disabled={downloadingPdf === ResumeEnum.SV}>
          {downloadingPdf === ResumeEnum.SV ? (
            <ButtonLoading swedish={true} />
          ) : (
            <div className="flex flex-row gap-2">
              <IconRenderer src="Sweden" alt="Sweden" height={20} /> Swedish
            </div>
          )}
        </Button>
        <Button onClick={() => downloadPDF(Resumes.EN)} disabled={downloadingPdf === ResumeEnum.EN}>
          {downloadingPdf === ResumeEnum.EN ? (
            <ButtonLoading swedish={false} />
          ) : (
            <div className="flex flex-row gap-2">
              <IconRenderer src="Usa" alt="Usa" height={20} /> English
            </div>
          )}
        </Button>
      </div>
    </>
  );
};

const ButtonLoading = ({ swedish }: { swedish?: boolean }) => (
  <div className="flex flex-row gap-2 blur-[0.5px] relative">
    {swedish ? (
      <>
        <IconRenderer src="Sweden" alt="Sweden" height={20} /> Swedish
      </>
    ) : (
      <>
        <IconRenderer src="Usa" alt="Usa" height={20} /> English
      </>
    )}
    <div className="w-full h-full flex items-center justify-center absolute">
      <Loader2 className="w-6 h-6 text-gray-800 animate-spin" />
    </div>
  </div>
);
