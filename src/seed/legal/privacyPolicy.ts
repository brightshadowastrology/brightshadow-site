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

function column(richTextContent: ReturnType<typeof richText>) {
  return {
    blockType: "column" as const,
    size: "full" as const,
    blocks: [
      {
        blockType: "richTextBlock" as const,
        content: richTextContent,
      },
    ],
  };
}

function dividerColumn() {
  return {
    blockType: "column" as const,
    size: "full" as const,
    blocks: [
      {
        blockType: "divider" as const,
      },
    ],
  };
}

export async function seedPrivacyPolicy(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "privacy-policy" } },
    limit: 1,
  });

  if (existing.docs.length > 0) {
    console.log("Privacy Policy page already exists. Skipping.");
    return;
  }

  const privacyPolicyBlock = {
    blockType: "content" as const,
    columns: [
      column(richText([lexicalHeading("Privacy Policy", "h1")])),
      column(
        richText([
          lexicalParagraph([
            {
              text: "The following is from the Confidentiality section of the National Council for Geocosmic Research\u2019s \u201cCode of Ethics\u201d. As a professional astrologer with integrity, and as a member of the NCGR, I adhere to all of these codes and apply them in all of my practices:",
            },
          ]),
        ]),
      ),
      dividerColumn(),
      column(
        richText([
          lexicalHeading("Maintaining Confidentiality", "h2"),
          lexicalOrderedList([
            lexicalListItem([
              { text: "a) ", format: 1 },
              {
                text: "Astrologers respect the confidentiality and rights to privacy of their clients, students and others who they deal with in astrological contexts. Confidentiality applies to the identity of and personal information about clients and other individuals.",
              },
            ]),
            lexicalListItem([
              { text: "b) ", format: 1 },
              {
                text: "Astrologers do not disclose personal information that is unattainable from public sources without the consent of the person involved as long as that person is living.",
              },
            ]),
          ]),
        ]),
      ),
      dividerColumn(),
      column(
        richText([
          lexicalHeading("Consultations With Colleagues", "h2"),
          lexicalParagraph([
            {
              text: "When consulting with colleagues, astrologers do not share the identity of the person or persons involved without prior consent. If unavoidable, they share only that information which is necessary to achieve the purposes of the consultation.",
            },
          ]),
        ]),
      ),
      dividerColumn(),
      column(
        richText([
          lexicalHeading("Confidential Information in Data Collections", "h2"),
          lexicalParagraph([
            {
              text: "Astrologers seek permission from living subjects (such as clients, students and friends) before including confidential information in named data collections. Alternatively, astrologers use coding or other techniques to protect the identity of the subjects.",
            },
          ]),
        ]),
      ),
    ],
  };

  await payload.create({
    collection: "pages",
    data: {
      title: "Privacy Policy",
      slug: "privacy-policy",
      hero: { type: "none" as const },
      layout: [privacyPolicyBlock],
      _status: "published",
    },
  });

  console.log(
    "Privacy Policy page seeded with 1 ContentBlock (5 columns + 4 dividers).",
  );
}
