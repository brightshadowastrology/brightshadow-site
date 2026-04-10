import React, { Fragment } from "react";

import type { Page } from "@/payload-types";

import { CallToActionBlock } from "@/blocks/CallToActionBlock/Component";
import { ContentBlock } from "@/blocks/ContentBlock/Component";
import { MediaBlock } from "@/blocks/MediaBlock/Component";
import { SplitContentBlock } from "@/blocks/SplitContentBlock/Component";
import { StatementBlock } from "@/blocks/StatementBlock/Component";

const blockComponents = {
  content: ContentBlock,
  cta: CallToActionBlock,
  mediaBlock: MediaBlock,
  splitContent: SplitContentBlock,
  statement: StatementBlock,
};

export const RenderBlocks: React.FC<{
  blocks: NonNullable<Page["layout"]>;
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType] as React.FC<any>;

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} />
                </div>
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
