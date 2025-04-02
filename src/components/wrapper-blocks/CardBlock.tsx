import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';

export const CardBlock = ({
  title,
  description,
  children,
}: {
  title?: string | null;
  description?: React.ReactNode | string | null;
  children: React.ReactNode;
}) => {
  return (
    <Card className="flex flex-col">
      {title || description ? (
        <CardHeader className="items-center pb-0 text-lg">
          {title ? <CardTitle>{title}</CardTitle> : null}
          {description ? (
            <CardDescription>{description}</CardDescription>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent className="flex-1">{children}</CardContent>
    </Card>
  );
};
