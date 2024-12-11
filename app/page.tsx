import Diary from "@/components/organism/home/diary";
import Features from "@/components/organism/home/features";
import Help from "@/components/organism/home/help";
import Homepage from "@/components/organism/home/home";

export default function Home() {
  return (
    <>
      <Homepage />
      <Help />
      <Features />
      <Diary />
    </>
  );
}
