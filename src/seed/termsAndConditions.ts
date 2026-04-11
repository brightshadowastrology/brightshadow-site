import type { Payload } from "payload";

function lexicalHeading(text: string, tag: "h1" | "h2" | "h3" | "h4") {
  return {
    children: [
      {
        detail: 0,
        format: 0,
        mode: "normal" as const,
        style: "",
        text,
        type: "text",
        version: 1,
      },
    ],
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    tag,
    type: "heading",
    version: 1,
  };
}

function lexicalParagraph(children: { text: string; format?: number }[]) {
  return {
    children: children.map((c) => ({
      detail: 0,
      format: c.format ?? 0,
      mode: "normal" as const,
      style: "",
      text: c.text,
      type: "text",
      version: 1,
    })),
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    type: "paragraph",
    version: 1,
  };
}

function lexicalListItem(children: { text: string; format?: number }[]) {
  return {
    children: children.map((c) => ({
      detail: 0,
      format: c.format ?? 0,
      mode: "normal" as const,
      style: "",
      text: c.text,
      type: "text",
      version: 1,
    })),
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    type: "listitem",
    value: 1,
    version: 1,
  };
}

function lexicalOrderedList(items: ReturnType<typeof lexicalListItem>[]) {
  return {
    children: items.map((item, i) => ({ ...item, value: i + 1 })),
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    listType: "number" as const,
    start: 1,
    tag: "ol" as const,
    type: "list",
    version: 1,
  };
}

function richText(
  children: (
    | ReturnType<typeof lexicalHeading>
    | ReturnType<typeof lexicalParagraph>
    | ReturnType<typeof lexicalOrderedList>
  )[],
) {
  return {
    root: {
      children,
      direction: "ltr" as const,
      format: "" as const,
      indent: 0,
      type: "root",
      version: 1,
    },
  };
}

function contentBlock(richTextContent: ReturnType<typeof richText>) {
  return {
    blockType: "content" as const,
    columns: [
      {
        size: "full" as const,
        richText: richTextContent,
        enableLink: false,
      },
    ],
  };
}

export async function seedTermsAndConditions(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "terms-and-conditions" } },
    limit: 1,
  });

  if (existing.docs.length > 0) {
    console.log("Terms & Conditions page already exists. Skipping.");
    return;
  }

  const cancellationBlock = contentBlock(
    richText([
      lexicalHeading("Cancellation Policy", "h2"),
      lexicalOrderedList([
        lexicalListItem([
          { text: "a) ", format: 1 },
          {
            text: "If you need to cancel an appointment, I require 24 hour notice. Cancellation infers that no services are rendered and a refund will be issued. Refunds can take 5–7 business days to show up in your account.",
          },
        ]),
        lexicalListItem([
          { text: "b) ", format: 1 },
          {
            text: "Clients who cancel after the 24 hour window has passed will not receive a refund.",
          },
        ]),
        lexicalListItem([
          { text: "c) ", format: 1 },
          {
            text: "Clients who do not show up for their appointment will not receive a refund. ",
          },
          { text: "Note:", format: 1 },
          {
            text: " Clients who are more than 15 minutes late for their session will be considered \u201cno shows,\u201d will lose their appointment slot, and will not receive a refund.",
          },
        ]),
      ]),
    ]),
  );

  const reschedulingBlock = contentBlock(
    richText([
      lexicalHeading("Rescheduling Policy", "h2"),
      lexicalOrderedList([
        lexicalListItem([
          { text: "a) ", format: 1 },
          {
            text: "Clients can always reschedule their appointment. To reschedule an appointment with no penalty, I require 24 hour notice.",
          },
        ]),
        lexicalListItem([
          { text: "b) ", format: 1 },
          {
            text: "Clients who reschedule after the 24 hour window, but before their appointment, will incur a $15 fee. Clients who reschedule after missing their appointment will incur a $30 fee.",
          },
        ]),
        lexicalListItem([
          { text: "c) ", format: 1 },
          {
            text: "A fee can only be waived due to an emergency, and I must receive email notification within 48 hours of the original appointment slot. Failure to notify me will result in the aforementioned, respective penalty charges.",
          },
        ]),
      ]),
    ]),
  );

  const professionalDisclosuresBlock = contentBlock(
    richText([
      lexicalHeading("Professional Disclosures", "h2"),
      lexicalParagraph([
        {
          text: "As a professional astrologer with integrity, and as a member of the National Council of Geocosmic Research, I adhere to all of the NCGR\u2019s Codes of Ethics which you can read in full there. Furthermore, please take the following into account when booking with me:",
        },
      ]),
    ]),
  );

  const notLicensedBlock = contentBlock(
    richText([
      lexicalHeading("I am not a Licensed Professional", "h2"),
      lexicalParagraph([
        {
          text: "The readings that I provide are based on my knowledge, expertise, and personal opinions. I am not qualified to give legal, financial, medical, psychological, psychiatric, or any other specialist advice. If you require such advice you should seek a licensed professional.",
        },
      ]),
    ]),
  );

  const notLiableBlock = contentBlock(
    richText([
      lexicalHeading("I am not Responsible nor Liable for Your Actions", "h2"),
      lexicalParagraph([
        {
          text: "What you decide to do with the information that I give you, including any actions you take, is based on your own personal responsibility and choice.",
        },
      ]),
    ]),
  );

  const readingsFinalBlock = contentBlock(
    richText([
      lexicalHeading("All Readings are Final", "h2"),
      lexicalParagraph([
        {
          text: "All transactions for services rendered are final. No exceptions.",
        },
      ]),
    ]),
  );

  await payload.create({
    collection: "pages",
    data: {
      title: "Terms & Conditions",
      slug: "terms-and-conditions",
      hero: { type: "none" as const },
      layout: [
        cancellationBlock,
        reschedulingBlock,
        professionalDisclosuresBlock,
        notLicensedBlock,
        notLiableBlock,
        readingsFinalBlock,
      ],
      _status: "published",
    },
  });

  console.log("Terms & Conditions page seeded with 6 ContentBlocks.");
}
