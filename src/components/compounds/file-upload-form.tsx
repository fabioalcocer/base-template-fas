import {
	FileUpload,
	FileUploadDropzone,
	FileUploadItem,
	FileUploadItemDelete,
	FileUploadItemMetadata,
	FileUploadItemPreview,
	FileUploadList,
	FileUploadTrigger,
} from "@/components/ui/file-upload";
import type { QrFormDataType } from "@/schemas/qrFormSchema";
import { CloudUpload, X } from "lucide-react";
import type { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { Button } from "../ui/button";

type Props = {
	field: ControllerRenderProps<QrFormDataType, keyof QrFormDataType>;
	form: UseFormReturn<QrFormDataType>;
	label?: keyof QrFormDataType;
};

function FileUploadForm({ field, form, label = "files" }: Props) {
	return (
		<FileUpload
			value={field.value as File[]}
			onValueChange={field.onChange}
			accept="image/*"
			maxFiles={1}
			maxSize={2 * 1024 * 1024}
			onFileReject={(_, message) => {
				form.setError(label, {
					message,
				});
			}}
			multiple
		>
			<FileUploadDropzone className="flex-row flex-wrap border-dotted text-center text-sm px-10">
				<CloudUpload className="size-4" />
				<FileUploadTrigger asChild>
					<Button variant="link" size="sm" className="p-0 h-auto">
						Selecciona un archivo
					</Button>
				</FileUploadTrigger>
				o arrástralo y suéltalo aquí para subirlo.
			</FileUploadDropzone>
			<FileUploadList>
				{(field.value as File[]).map((file: File) => (
					<FileUploadItem key={file.name} value={file}>
						<FileUploadItemPreview />
						<FileUploadItemMetadata />
						<FileUploadItemDelete asChild>
							<Button variant="ghost" size="icon" className="size-7">
								<X />
								<span className="sr-only">Delete</span>
							</Button>
						</FileUploadItemDelete>
					</FileUploadItem>
				))}
			</FileUploadList>
		</FileUpload>
	);
}

export default FileUploadForm;
