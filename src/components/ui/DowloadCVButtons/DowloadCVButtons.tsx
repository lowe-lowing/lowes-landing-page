import { IconRenderer } from "@/assets/icons/Icon";
import { FC, useState } from "react";
import { Button } from "../Button";
import axios from "axios";
import { ResumeRequest, Resumes, ResumeData, ResumeEnum } from "@/utils/ResumeValidator";

export const DowloadCVButtons: FC = () => {
  const [downloadingPdf, setDownloadingPdf] = useState<ResumeEnum | false>(false);
  const downloadPDF = async (resume: ResumeData) => {
    setDownloadingPdf(resume.id);
    const payload: ResumeRequest = {
      id: resume.id,
    };
    const { data } = await axios.post<Buffer>("/api/resume", payload, {
      responseType: "arraybuffer", // Ensure the response is treated as an ArrayBuffer
    });

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
          <div className="flex flex-row gap-2">
            <IconRenderer src="Sweden" alt="Sweden" height={20} /> Swedish
          </div>
        </Button>
        <Button onClick={() => downloadPDF(Resumes.EN)} disabled={downloadingPdf === ResumeEnum.EN}>
          <div className="flex flex-row gap-2">
            <IconRenderer src="Usa" alt="Usa" height={20} /> English
          </div>
        </Button>
      </div>
    </>
  );
};
