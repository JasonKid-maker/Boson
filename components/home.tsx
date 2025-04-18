"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Paper from "./paper";
import { AnimationSwitch } from "./animation-swith";
// import MiniPic from "./mini-pic";

import { cn } from "@/lib/utils";
import AvatarTransition from "@/components/avatar";
// import { ThemeSwitch } from "@/components/theme-switch";
import CardStack from "@/components/card-stack";
import AnimatedEmoji from "@/components/animated-emoji";
import IconCloud from "@/components/icon-cloud";
import MapComponent from "@/components/map";
import WebAgent from "@/components/webagent";
import Chatbot from "@/components/chatbot";
// import { MiniModel } from "@/components/mini";
import Actions from "@/components/actions";
import { layouts, selectedCard } from "@/config/layout";
import { icons } from "@/config/icons";
import useWindowWidth from "@/hooks/useWindowWidth";

interface HomeProps {
  photos: string[];
  avatarUrl: string;
  dogUrl: string;
  actionImageUrl: string;
  resumeUrl: string;
  webagentUrl: string;
  chatbotUrl: string;
  paperUrl: string;
}

const Home = ({
  photos,
  avatarUrl,
  dogUrl,
  actionImageUrl,
  resumeUrl,
  webagentUrl,
  chatbotUrl,
  paperUrl,
}: HomeProps) => {
  const width = useWindowWidth();
  const [tabSelected, setTabSelected] = useState("all");
  const [animated, setAnimated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/blog");
  }, [router]);

  if (!width) {
    return null;
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <Tabs
        aria-label="Tabs"
        className="mb-2 md:mb-6 rounded-full"
        classNames={{
          cursor: "shadow-none",
          tabList:
            "bg-[#ece7e7] dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-full",
        }}
        motionProps={{
          initial: { scale: 0.8 },
          animate: { scale: 1 },
          exit: { scale: 0.8 },
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        radius={"full"}
        onSelectionChange={(selected) => {
          if (selected === "blog") {
            router.push("/blog");

            return;
          }
          setTabSelected(selected as string);
        }}
      >
        <Tab key="all" title="ALL" />
        <Tab key="blog" title="BLOG" />
      </Tabs>

      <Responsive
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        className="layout w-full h-full"
        cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
        isDraggable={width > 480}
        isResizable={false}
        layouts={layouts[tabSelected]}
        margin={[15, 15]}
        width={width}
      >
        <div
          key="avatar"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex flex-col justify-between p-5 overflow-hidden z-[1]",
            selectedCard[tabSelected]["avatar"] ? "opacity-100" : "opacity-50"
          )}
        >
          <AvatarTransition avatarUrl="/tx.jpg" dogUrl={dogUrl} />
          <p className="text-sm md:text-medium overflow-auto">
            <span className="font-oleo text-2xl"> Hello! My name is Gao Bosen.</span> I am a high school student with a strong passion for archaeology. Outside of my regular studies, I am deeply fascinated by exploring historical sites and studying ancient civilizations. I look forward to connecting with fellow archaeology enthusiasts to uncover the mysteries of history together. In the future, I hope to further my studies in archaeology and participate in more research and excavation projects, contributing my efforts to revealing the secrets of the past.</p>
        </div>
        <div
          key="themeSwitch"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
            selectedCard[tabSelected]["themeSwitch"] ? "opacity-100" : "opacity-50"
          )}
          style={{
            backgroundImage: `url('/565656.jpg')`,
            backgroundSize: "cover", // 图片填充满整个 div
            backgroundRepeat: "no-repeat", // 不重复
            backgroundPosition: "center", // 居中显示
          }}
          onClick={() => {
            router.push("/blog/1d9b12c3-30e1-817f-9bd8-f08e1f76beaf"); // 替换为你的目标链接
          }}
          role="button"
        >
          
        </div>


        <div
          key="cardStack"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[2]",
            selectedCard[tabSelected]["cardStack"]
              ? "opacity-100"
              : "opacity-50"
          )}
        >
          <CardStack photos={photos} />
        </div>

        <div
          key="mapComponent"
          className={cn(
            "bg-white dark:bg-darkBg cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
            selectedCard[tabSelected]["mapComponent"]
              ? "opacity-100"
              : "opacity-50"
          )}
          style={{
            backgroundImage: `url('/lsmini.jpg')`,
            backgroundSize: "cover", // 图片填充满整个 div
            backgroundRepeat: "no-repeat", // 不重复
            backgroundPosition: "center", // 居中显示
          }}
          onClick={() => {
            router.push("/blog/1d9b12c3-30e1-8121-83bc-e23e8369aad0"); // 替换为你的目标链接
          }}
          role="button"
        >
          
        </div>
        <div
          key="mapComponent2"
          className={cn(
            "bg-white dark:bg-darkBg cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
            selectedCard[tabSelected]["mapComponent"]
              ? "opacity-100"
              : "opacity-50"
          )}
          style={{
            backgroundImage: `url('/yqmini.jpg')`,
            backgroundSize: "cover", // 图片填充满整个 div
            backgroundRepeat: "no-repeat", // 不重复
            backgroundPosition: "center", // 居中显示
          }}
        onClick={() => {
          router.push("/blog/1d9b12c3-30e1-8107-b630-e2d21ae9a669"); // 替换为你的目标链接
        }}
        role="button"
        >
          
        </div>

        <div
          key="webAgent"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["webAgent"] ? "opacity-100" : "opacity-50"
          )}
          style={{
            backgroundImage: `url('/333.jpg')`,
            backgroundSize: "cover", // 图片填充满整个 div
            backgroundRepeat: "no-repeat", // 不重复
            backgroundPosition: "center", // 居中显示
          }}
          onClick={() => {
            // 跳转到指定链接
            router.push("/blog/1d9b12c3-30e1-81f7-b79b-f1e1c2f2f7a9"); // 替换为你的目标链接
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              router.push("https://playcanv.as/b/6e3141a6");
            }
          }}
        >
        </div>
        <div
          key="webAgent2"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["webAgent"] ? "opacity-100" : "opacity-50"
          )}
          style={{
            backgroundImage: `url('/115.jpg')`,
            backgroundSize: "cover", // 图片填充满整个 div
            backgroundRepeat: "no-repeat", // 不重复
            backgroundPosition: "center", // 居中显示
          }}
          onClick={() => {
            // 跳转到指定链接
            router.push("/blog/1d9b12c3-30e1-81b3-8ec8-c4e962a4164a"); // 替换为你的目标链接
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              router.push("https://playcanv.as/p/wwwViNJA/");
            }
          }}
        >
        </div>
        

      </Responsive>
    </div>
  );
};

export default Home;
