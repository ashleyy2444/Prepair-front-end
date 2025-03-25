import { Suspense } from "react";
import RequestDetailsComponent from "./request-details";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading request details...</div>}>
      <RequestDetailsComponent />
    </Suspense>
  );
}
