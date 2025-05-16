import { ApiError, ApiErrorResponse, ApiSuccessResponse } from "@/lib/error";
import { NextResponse } from "next/server";

export function errorHandler(error: unknown): NextResponse<ApiErrorResponse> {
  console.error("API Error:", JSON.stringify(error, null, 2));

  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
        },
        status: error.status,
      },
      { status: error.status }
    );
  }

  if (error instanceof Error) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred",
          details:
            process.env.NODE_ENV === "development"
              ? {
                  originalMessage: error.message,
                  stack: error.stack,
                }
              : undefined,
        },
        status: 500,
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "An unexpected error occurred",
        details:
          process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      status: 500,
    },
    { status: 500 }
  );
}

export function createSuccessResponse<T>(
  data: T
): NextResponse<ApiSuccessResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
  });
}
