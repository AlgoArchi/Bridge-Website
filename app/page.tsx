import Image from "next/image";
import FromNetworkSelectInput from "@/app/components/FromNetworkSelect";
import ToNetworkSelectInput from "@/app/components/ToNetworkSelect";
import AmountForm from "@/app/components/AmountForm";
import AddressForm from "./components/DestinationForm";
import MemoForm from "./components/MemoForm";
import AssetForm from "./components/AssetForm";
import Wallet from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-between p-24">
      <div>Blockchain Token Bridge website</div>
      <div className="flex flex-col space-y-8 items-center justify-center lg:w-[50%] h-[90%] bg-[#1e1e1e] rounded-2xl p-20">
        <div className="text-xl">Send</div>
        <div className="flex gap-4">
          <FromNetworkSelectInput />
          <ToNetworkSelectInput />
        </div>
        <div className="w-full">
          <AssetForm />
        </div>
        <div className="w-full">
          <AmountForm />
        </div>
        <div className="w-full">
          <AddressForm />
        </div>
        <div className="w-full">
          <MemoForm />
        </div>
        <div className="w-full">
          <Wallet />
        </div>
      </div>
    </main>
  );
}
