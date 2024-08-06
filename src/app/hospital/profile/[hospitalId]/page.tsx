import HospitalProfile from "@/components/hospital/hospital-profile";

export const runtime = "edge";

type Props = {};

export default function page({}: Props) {
  return <HospitalProfile />;
}
