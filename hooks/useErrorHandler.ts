import { ApiError } from "@/lib/error";
import { useToast } from "./use-toast";

const ERROR_MESSAGES: Record<string, string> = {
  BAD_REQUEST: "The request could not be completed. Please check your input.",
  UNAUTHORIZED: "You need to log in to access this feature.",
  FORBIDDEN: "You do not have permission to access this resource.",
  NOT_FOUND: "The requested resource was not found.",
  VALIDATION_ERROR: "Please check your input and try again.",
  ZIP_PROCESSING_ERROR:
    "There was a problem with your ZIP file. Please check the file and try again.",
  INTERNAL_SERVER_ERROR:
    "Something went wrong on our end. Please try again later.",
  REQUEST_TIMEOUT: "The request took too long to complete. Please try again.",
  CLIENT_ERROR:
    "There was an error connecting to the server. Please check your connection.",
  UNKNOWN_ERROR: "An unexpected error occurred. Please try again later.",
};

export function useErrorHandler() {
  const { toast } = useToast();

  const handleError = (error: unknown, fallbackMessage?: string) => {
    if (error instanceof ApiError) {
      const message = error.message || ERROR_MESSAGES[error.code];
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
      return error;
    }

    if (error instanceof Error) {
      toast({
        title: "Error",
        description: fallbackMessage || error.message,
        variant: "destructive",
      });
      return error;
    }

    toast({
      title: "Error",
      description: fallbackMessage || ERROR_MESSAGES.UNKNOWN_ERROR,
      variant: "destructive",
    });
    return new Error(fallbackMessage || ERROR_MESSAGES.UNKNOWN_ERROR);
  };

  return handleError;
}
