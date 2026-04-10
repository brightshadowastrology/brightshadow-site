import React from "react";
import Image from "next/image";

import type { Media } from "@/payload-types";
import { CMSLink } from "@/components/UI/Link";

type CardBlockProps = {
  image: number | Media;
  title: string;
  description?: string | null;
  enableLink?: boolean | null;
  link?: React.ComponentProps<typeof CMSLink>;
};

export const CardBlock: React.FC<CardBlockProps> = ({
  image,
  title,
  description,
  enableLink,
  link,
}) => {
  const imageData = typeof image === "object" ? image : null;

  return (
    <div>
      {imageData?.url && (
        <div>
          <Image
            src={imageData.url}
            alt={imageData.alt ?? title}
            width={imageData.width ?? 800}
            height={imageData.height ?? 600}
          />
        </div>
      )}
      <div>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {enableLink && link && <CMSLink {...link} />}
      </div>
    </div>
  );
};
