import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface WebAgentProps {
  webAgentUrl: string;
  title: string;
  url: string;
}

const WebAgent = ({ webAgentUrl,title,url }: WebAgentProps) => {
  return (
    <div className="relative w-full h-full group dark:bg-darkBg flex flex-col justify-center items-center">
      {/* <div className="absolute -bottom-96 left-16 bg-cardPink w-[145%] h-full rounded-full dark:hidden" /> */}

      <div className="absolute top-1/2 -translate-y-1/2  transform rounded-2xl ">
        <Image
          priority
          alt="Web Agent Interface Preview"
          className="w-full h-full object-contain rounded-2xl "
          loading="eager"
          quality={75}
          height={800}
          width={1000}
          src={webAgentUrl}
        />
      </div>
      <button className="absolute bg-white dark:bg-darkBg bottom-2 left-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-40 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight">
        <div className="flex justify-center items-center">
          <Link isExternal color="foreground" href={url}>
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              {title}
            </span>
          </Link>
          <GoArrowUpRight />
        </div>
      </button>
    </div>
  );
};

export default WebAgent;
