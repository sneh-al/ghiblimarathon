/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0dUlWUmPl8m
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export default async function Progress() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 md:px-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <div className="text-muted-foreground">Software Engineer</div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Your Progress</h1>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Task Completion
              </span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="mt-2 h-2.5 w-full rounded-full bg-muted">
              <div
                className="h-2.5 rounded-full bg-primary"
                style={{ width: "75%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div>
// <h2 className="text-xl font-bold">Tasks</h2>
// <div className="mt-4 space-y-4">
//   <div>
//     <h3 className="text-lg font-medium">Completed</h3>
//     <div className="mt-2 grid gap-3">
//       <div className="flex items-center gap-3 rounded-lg bg-background p-3">
//         <div className="rounded-full bg-green-500 p-2 text-green-50">
//           <CheckIcon className="h-4 w-4" />
//         </div>
//         <div className="flex-1">
//           <div className="text-sm font-medium">
//             Set up project repository
//           </div>
//           <div className="text-xs text-muted-foreground">
//             Completed on May 15, 2023
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center gap-3 rounded-lg bg-background p-3">
//         <div className="rounded-full bg-green-500 p-2 text-green-50">
//           <CheckIcon className="h-4 w-4" />
//         </div>
//         <div className="flex-1">
//           <div className="text-sm font-medium">
//             Implement user authentication
//           </div>
//           <div className="text-xs text-muted-foreground">
//             Completed on June 1, 2023
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div>
//     <h3 className="text-lg font-medium">Ongoing</h3>
//     <div className="mt-2 grid gap-3">
//       <div className="flex items-center gap-3 rounded-lg bg-background p-3">
//         <div className="rounded-full bg-yellow-500 p-2 text-yellow-50">
//           <ClockIcon className="h-4 w-4" />
//         </div>
//         <div className="flex-1">
//           <div className="text-sm font-medium">
//             Implement dashboard functionality
//           </div>
//           <div className="text-xs text-muted-foreground">
//             Started on June 10, 2023
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center gap-3 rounded-lg bg-background p-3">
//         <div className="rounded-full bg-yellow-500 p-2 text-yellow-50">
//           <ClockIcon className="h-4 w-4" />
//         </div>
//         <div className="flex-1">
//           <div className="text-sm font-medium">
//             Optimize application performance
//           </div>
//           <div className="text-xs text-muted-foreground">
//             Started on June 15, 2023
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div>
//     <h3 className="text-lg font-medium">On Hold</h3>
//     <div className="mt-2 grid gap-3">
//       <div className="flex items-center gap-3 rounded-lg bg-background p-3">
//         <div className="rounded-full bg-gray-500 p-2 text-gray-50">
//           <PauseIcon className="h-4 w-4" />
//         </div>
//         <div className="flex-1">
//           <div className="text-sm font-medium">
//             Implement user notifications
//           </div>
//           <div className="text-xs text-muted-foreground">
//             On hold since June 1, 2023
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div>
//     <h3 className="text-lg font-medium">Working On</h3>
//     <div className="mt-2 grid gap-3">
//       <div className="flex items-center gap-3 rounded-lg bg-background p-3">
//         <div className="rounded-full bg-blue-500 p-2 text-blue-50">
//           <PencilIcon className="h-4 w-4" />
//         </div>
//         <div className="flex-1">
//           <div className="text-sm font-medium">
//             Implement user profile page
//           </div>
//           <div className="text-xs text-muted-foreground">
//             Started on June 20, 2023
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div>
//     <h3 className="text-lg font-medium">Dropped</h3>
//     <div className="mt-2 grid gap-3">
//       <div className="flex items-center gap-3 rounded-lg bg-background p-3">
//         <div className="rounded-full bg-gray-500 p-2 text-gray-50">
//           <TrashIcon className="h-4 w-4" />
//         </div>
//         <div className="flex-1">
//           <div className="text-sm font-medium">
//             Implement user notifications
//           </div>
//           <div className="text-xs text-muted-foreground">
//             Dropped on June 15, 2023
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// function CheckIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 6 9 17l-5-5" />
//     </svg>
//   );
// }

// function ClockIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   );
// }

// function PauseIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="14" y="4" width="4" height="16" rx="1" />
//       <rect x="6" y="4" width="4" height="16" rx="1" />
//     </svg>
//   );
// }

// function PencilIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
//       <path d="m15 5 4 4" />
//     </svg>
//   );
// }

// function TrashIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 6h18" />
//       <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
//       <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
//     </svg>
//   );
// }
