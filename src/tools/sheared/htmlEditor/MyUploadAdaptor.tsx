import { FileLoader } from "@ckeditor/ckeditor5-upload";

class MyUploadAdapter {
  private loader: FileLoader;

  constructor(loader: FileLoader) {
    // `loader` is the CKEditor 5 file loader instance.
    this.loader = loader;
  }

  // Starts the upload process.
  upload(): Promise<{ default: string }> {
    return this.loader.file.then((file) => {
      const uploadedUrl: string = file ? URL.createObjectURL(file) : "";
      return new Promise((resolve, reject) => {
        // Simulate an asynchronous upload task.
        setTimeout(() => {
          resolve({ default: uploadedUrl });
        }, 2000); // اینجا شما باید واقعی‌ترین بارگذاری تصویر را پیاده‌سازی کنید.
      });
    });
  }

  // Aborts the upload process.
  abort(): void {
    // You can implement an abort mechanism here if needed.
  }
}

export default MyUploadAdapter;
