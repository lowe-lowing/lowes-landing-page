export const downloadPDF = (filePath: string, fileName: string) => {
  fetch(filePath)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a download link
      const url = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);

      // Append the link to the DOM and trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up the temporary object URL
      window.URL.revokeObjectURL(url);
    });
};
