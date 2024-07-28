import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  children: any;
  title: string;
  desc: string;
};

export default function FormSection({ children, title, desc }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-cyan-700">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
