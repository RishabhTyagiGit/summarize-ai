"use client";
import React, { useRef, useState } from "react";
import UploadFormInput from "@/components/upload/upload-form-input";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary } from "@/actions/upload-actions";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

const UploadForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
    },
    onUploadError: (err) => {
      toast("Error Occured while uploading");
    },
    onUploadBegin: ({ file }: any) => {
      console.log("upload has begun for", file);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      const file = formData.get("file") as File;

      // validating the fields
      const validatedFields = schema.safeParse({ file });

      if (!validatedFields.success) {
        toast(
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
            "Invalid file"
        );
        setIsLoading(false);
        return;
      }

      toast("We are uploading your PDF!");
      // upload the file to uploadthing
      const resp = await startUpload([file]);
      if (!resp) {
        toast("Something went wrong. Please use a different file");
        setIsLoading(false);
        return;
      }
      toast("Hang tight! Our AI is reading through your document!");
      // parse the pdf using lang chain
      const result = await generatePdfSummary(resp);

      const { data = null, message = null } = result || {};

      if (data) {
        toast("Hang tight! We are saving your summary");
        formRef.current?.reset();
        if (data.summary) {
          // save the summary to database
        }
      }
    } catch (err) {
      console.error("Error occurred", err);
      setIsLoading(false);
      formRef.current?.reset();
    }

    // summarize the pdf using AI
    // save the summary to the database
    // redirect to the [id] summary page
  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl max-auto">
      <UploadFormInput
        ref={formRef}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UploadForm;
