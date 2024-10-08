"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button, Loader, Settings } from "@veluxlink/components";
import useSWR from "swr";
import { api, customFormData } from "@veluxlink/util";
import TokenStorage from "@veluxlink/tokenStorage";

export default function UserPage() {
  const { username } = useParams();

  // const { data, isLoading, error } = useSWR(
  //   "/users/getThisUser",
  //   async (url) => {
  //     const token = new TokenStorage(window.localStorage).get();
  //     if (!token) return null;
  //     const formdata = customFormData();
  //     formdata.append("username", username as string);
  //     const { data, status } = await api(url, {
  //       method: "POST",
  //       body: formdata,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (!data?.status) return null;
  //     return data.data;
  //   }
  // );

  // if (isLoading)
  //   return (
  //     <div className="w-full h-screen">
  //       <Loader />
  //     </div>
  //   );

  // if (data)
  return (
    <main className="px-4 pt-8 md:pt-28 md:px-20">
      <section className="w-full mb-8 justify-between flex items-center">
        <Image
          alt="user image"
          src={"/pic.png"}
          width={96}
          height={96}
          className="rounded-full w-24 h-24"
        />
        <div className="flex gap-2 justify-center items-center">
          <Button className="rounded-full">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.723 30.1297C23.5353 30.1297 21.8668 29.7001 19.3684 28.3043C16.3303 26.6006 13.9804 25.0276 10.9587 22.0139C8.04534 19.1023 6.6276 17.2173 4.64336 13.6066C2.40175 9.52982 2.78387 7.39286 3.21102 6.47954C3.7197 5.38794 4.47056 4.73504 5.44107 4.08702C5.99232 3.72585 6.57568 3.41625 7.18374 3.16214C7.24459 3.13597 7.30118 3.11103 7.35168 3.08851C7.65288 2.95282 8.10923 2.74777 8.68728 2.96682C9.07305 3.11164 9.41745 3.40796 9.95656 3.94038C11.0622 5.03076 12.573 7.45918 13.1304 8.65179C13.5046 9.45558 13.7522 9.98617 13.7528 10.5813C13.7528 11.278 13.4023 11.8152 12.977 12.3951C12.8973 12.504 12.8182 12.6081 12.7415 12.7091C12.2785 13.3176 12.1769 13.4934 12.2438 13.8074C12.3795 14.4384 13.3914 16.3167 15.0544 17.976C16.7173 19.6354 18.5415 20.5834 19.1749 20.7184C19.5023 20.7884 19.6818 20.6825 20.3097 20.2031C20.3998 20.1343 20.4923 20.0631 20.589 19.9919C21.2377 19.5094 21.75 19.168 22.4303 19.168H22.4339C23.026 19.168 23.5328 19.4248 24.3725 19.8483C25.4678 20.4008 27.9692 21.8922 29.0663 22.999C29.5999 23.5369 29.8975 23.8801 30.0429 24.2652C30.2619 24.8451 30.0557 25.2996 29.9212 25.6039C29.8987 25.6544 29.8737 25.7097 29.8476 25.7712C29.5914 26.3782 29.28 26.9603 28.9172 27.5102C28.2704 28.4777 27.6151 29.2267 26.521 29.736C25.9593 30.0018 25.3444 30.1364 24.723 30.1297Z"
                fill="white"
              />
            </svg>
          </Button>
          <Button className="rounded-full">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.723 30.1297C23.5353 30.1297 21.8668 29.7001 19.3684 28.3043C16.3303 26.6006 13.9804 25.0276 10.9587 22.0139C8.04534 19.1023 6.6276 17.2173 4.64336 13.6066C2.40175 9.52982 2.78387 7.39286 3.21102 6.47954C3.7197 5.38794 4.47056 4.73504 5.44107 4.08702C5.99232 3.72585 6.57568 3.41625 7.18374 3.16214C7.24459 3.13597 7.30118 3.11103 7.35168 3.08851C7.65288 2.95282 8.10923 2.74777 8.68728 2.96682C9.07305 3.11164 9.41745 3.40796 9.95656 3.94038C11.0622 5.03076 12.573 7.45918 13.1304 8.65179C13.5046 9.45558 13.7522 9.98617 13.7528 10.5813C13.7528 11.278 13.4023 11.8152 12.977 12.3951C12.8973 12.504 12.8182 12.6081 12.7415 12.7091C12.2785 13.3176 12.1769 13.4934 12.2438 13.8074C12.3795 14.4384 13.3914 16.3167 15.0544 17.976C16.7173 19.6354 18.5415 20.5834 19.1749 20.7184C19.5023 20.7884 19.6818 20.6825 20.3097 20.2031C20.3998 20.1343 20.4923 20.0631 20.589 19.9919C21.2377 19.5094 21.75 19.168 22.4303 19.168H22.4339C23.026 19.168 23.5328 19.4248 24.3725 19.8483C25.4678 20.4008 27.9692 21.8922 29.0663 22.999C29.5999 23.5369 29.8975 23.8801 30.0429 24.2652C30.2619 24.8451 30.0557 25.2996 29.9212 25.6039C29.8987 25.6544 29.8737 25.7097 29.8476 25.7712C29.5914 26.3782 29.28 26.9603 28.9172 27.5102C28.2704 28.4777 27.6151 29.2267 26.521 29.736C25.9593 30.0018 25.3444 30.1364 24.723 30.1297Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </section>
      <Settings
        values={{
          scheduleFee: 0.1,
          videoCharge: 0.4,
          voiceCharge: 0.5,
        }}
      />
    </main>
  );
}
