import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ResourceDownload() {
  const { filename } = useParams();

  useEffect(() => {
    const fileUrl = `/resource/${filename}`;

    fetch(fileUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(url);
      })
      .catch(console.error);
  }, [filename]);

  return null; // blank page
}