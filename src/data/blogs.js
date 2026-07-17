export const blogCategories = [
  "All",
  "Medication Safety",
  "Genomics",
  "Prenatal",
  "Diagnostics",
];

export const blogTypes = ["All", "Guide", "Insight", "News"];

export const blogs = [
  {
    id: 1,
    title: "Identifies the right drug and dosage",
    fullTitle:
      "Identifying the Right Drug and Dosage: A Guide to Safer Medication Use",
    slug: "identifies-the-right-drug-and-dosage",
    image: "/assets/blog-right-drug-dosage.png",
    publishedAt: "2026-07-17",
    category: "Medication Safety",
    type: "Guide",
    excerpt:
      "Selecting an inappropriate drug or miscalculating a dosage can transform a well-intentioned remedy into a source of harm. Learn how the right medication and dose are chosen safely.",
    content: [
      {
        type: "paragraph",
        text: "When illness strikes, the first question that arises is almost always the same: which medication should I take, and in what quantity? While the question seems simple, the answer is rarely straightforward. Selecting an inappropriate drug or miscalculating a dosage can transform a well-intentioned remedy into a source of harm. This article explores how healthcare professionals determine the correct medication and dosage for a patient, and what considerations individuals should keep in mind when navigating this process.",
      },
      {
        type: "heading",
        text: "Accurate Diagnosis Is the Foundation",
      },
      {
        type: "paragraph",
        text: "Before any medication can be prescribed, an accurate diagnosis must be established. Symptoms that appear identical on the surface can stem from entirely different underlying causes. A fever, for instance, may result from a viral infection, a bacterial infection, or an unrelated condition altogether, and each requires a distinct treatment approach. Taking medication without a confirmed diagnosis can mask the true problem and delay appropriate care, which is why persistent or severe symptoms warrant a proper medical evaluation rather than guesswork.",
      },
      {
        type: "heading",
        text: "Key Factors That Determine Dosage",
      },
      {
        type: "paragraph",
        text: "Physicians and pharmacists rely on a range of variables to calculate an appropriate dosage for each patient:",
      },
      {
        type: "list",
        items: [
          {
            label: "Age",
            text: "Dosing requirements differ significantly between children, adults, and older adults, as the body processes medication differently at each life stage.",
          },
          {
            label: "Body weight",
            text: "Many medications are dosed in proportion to body mass to ensure the treatment is neither too weak nor excessively strong.",
          },
          {
            label: "Kidney and liver function",
            text: "These organs are primarily responsible for metabolizing and clearing drugs from the body, so any impairment can significantly alter how a medication should be dosed.",
          },
          {
            label: "Existing medical conditions and current medications",
            text: "Certain drug combinations can interact unpredictably, so a complete medical history is essential before starting any new treatment.",
          },
          {
            label: "Pregnancy and breastfeeding",
            text: "Several medications are unsafe during these periods and require careful substitution or dose adjustment.",
          },
          {
            label: "Allergy history",
            text: "Prior allergic reactions to any medication should always be disclosed, as they directly influence which drugs can be safely prescribed.",
          },
        ],
      },
      {
        type: "heading",
        text: "The Risks of Self-Medication",
      },
      {
        type: "paragraph",
        text: "Choosing medication without professional guidance carries several risks:",
      },
      {
        type: "list",
        items: [
          {
            label: "Masking the underlying condition",
            text: "The wrong drug may temporarily relieve symptoms while allowing the actual illness to progress unnoticed.",
          },
          {
            label: "Toxicity from overdosing",
            text: "Taking more than the recommended amount can overwhelm the body's ability to process the drug, leading to adverse effects or, in severe cases, poisoning.",
          },
          {
            label: "Drug resistance from underdosing",
            text: "This is particularly concerning with antibiotics, where insufficient dosing can allow bacteria to survive and develop resistance.",
          },
          {
            label: "Withdrawal complications",
            text: "Abruptly stopping certain medications, rather than tapering off under supervision, can trigger harmful reactions.",
          },
        ],
      },
      {
        type: "heading",
        text: "Best Practices for Safe Medication Use",
      },
      {
        type: "paragraph",
        text: "To minimize risk and ensure treatment is effective, individuals should follow these principles:",
      },
      {
        type: "ordered-list",
        items: [
          "Adhere strictly to prescribed dosages and schedules provided by a doctor or pharmacist.",
          "Complete the full course of treatment, even if symptoms improve early, particularly with antibiotics.",
          "Check expiration dates before taking any medication.",
          "Report unusual reactions immediately — symptoms such as rashes, swelling, or difficulty breathing require urgent medical attention.",
          "Keep medications in their original packaging so that dosage instructions and identifying information remain accessible at all times.",
        ],
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Identifying the right drug and the right dosage is a highly individualized process, shaped by age, weight, health status, and numerous other factors unique to each patient. This determination should always be made in consultation with a qualified healthcare professional rather than through online research or anecdotal advice from others. When it comes to health, informed caution paired with professional guidance remains the most reliable safeguard.",
      },
      {
        type: "disclaimer",
        text: "This article is intended for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider before starting, stopping, or changing any medication.",
      },
    ],
  },
  {
    id: 2,
    title: "Uses Next-Generation Sequencing",
    fullTitle: "Uses of Next-Generation Sequencing: Transforming Modern Genomics",
    slug: "uses-next-generation-sequencing",
    image: "/assets/blog-next-generation-sequencing.png",
    publishedAt: "2026-07-17",
    category: "Genomics",
    type: "Insight",
    excerpt:
      "NGS sequences millions of DNA fragments at once, unlocking breakthroughs across clinical diagnostics, cancer genomics, prenatal screening, infectious disease surveillance, and more.",
    content: [
      {
        type: "paragraph",
        text: "Next-Generation Sequencing (NGS) has revolutionized the way scientists and clinicians study DNA and RNA. Unlike traditional sequencing methods, which analyzed one gene fragment at a time, NGS allows millions of DNA fragments to be sequenced simultaneously, producing vast amounts of genetic data in a fraction of the time and cost. This capability has opened the door to breakthroughs across medicine, agriculture, forensics, and biological research. In this article, we explore the major applications of NGS and why it has become an indispensable tool in modern science.",
      },
      {
        type: "heading",
        text: "What Makes NGS Different",
      },
      {
        type: "paragraph",
        text: "Before diving into its applications, it is worth understanding what sets NGS apart. Traditional Sanger sequencing could process a single DNA strand at a time, making large-scale genomic studies slow and expensive. NGS technology, by contrast, sequences thousands to millions of DNA fragments in parallel, dramatically increasing throughput while reducing turnaround time. This shift has made whole-genome and whole-exome sequencing accessible not just to large research institutions, but increasingly to clinical laboratories and smaller research teams as well.",
      },
      {
        type: "heading",
        text: "Key Applications of Next-Generation Sequencing",
      },
      {
        type: "subheading",
        text: "1. Clinical Diagnostics",
      },
      {
        type: "paragraph",
        text: "NGS plays a central role in diagnosing genetic disorders. By sequencing a patient's genome or targeted gene panels, clinicians can identify mutations responsible for inherited conditions, rare diseases, and developmental disorders, often enabling earlier and more accurate diagnoses than conventional testing methods.",
      },
      {
        type: "subheading",
        text: "2. Cancer Genomics and Precision Oncology",
      },
      {
        type: "paragraph",
        text: "One of the most impactful uses of NGS is in cancer research and treatment. Tumor sequencing helps identify specific mutations driving a patient's cancer, allowing oncologists to select targeted therapies suited to the tumor's genetic profile. This approach, often called precision oncology, has improved treatment outcomes by moving away from a one-size-fits-all model of cancer care.",
      },
      {
        type: "subheading",
        text: "3. Prenatal and Reproductive Screening",
      },
      {
        type: "paragraph",
        text: "NGS is widely used in non-invasive prenatal testing (NIPT), where fetal DNA circulating in maternal blood is analyzed to screen for chromosomal abnormalities such as Down syndrome. It is also used in carrier screening to help prospective parents understand their risk of passing on inherited genetic conditions.",
      },
      {
        type: "subheading",
        text: "4. Infectious Disease Surveillance",
      },
      {
        type: "paragraph",
        text: "NGS enables rapid identification and genomic characterization of pathogens, including viruses and bacteria. This capability proved critical during the COVID-19 pandemic, where sequencing was used to track viral variants and monitor how the virus was evolving across populations. The same approach is now routinely applied to monitor outbreaks of other infectious diseases.",
      },
      {
        type: "subheading",
        text: "5. Pharmacogenomics",
      },
      {
        type: "paragraph",
        text: "By analyzing how an individual's genetic makeup influences their response to medications, NGS supports the development of personalized treatment plans. This helps clinicians predict which drugs will be effective for a patient and which may cause adverse reactions, reducing trial-and-error prescribing.",
      },
      {
        type: "subheading",
        text: "6. Agricultural and Livestock Improvement",
      },
      {
        type: "paragraph",
        text: "Beyond human health, NGS is used extensively in agriculture to sequence the genomes of crops and livestock. This allows researchers to identify genes associated with desirable traits such as disease resistance, higher yield, or improved nutritional content, accelerating selective breeding programs.",
      },
      {
        type: "subheading",
        text: "7. Forensic Science",
      },
      {
        type: "paragraph",
        text: "In forensic investigations, NGS offers higher resolution DNA profiling than older methods, making it possible to analyze degraded or trace samples that would previously have been unusable. This has improved the accuracy of identification in criminal investigations and missing persons cases.",
      },
      {
        type: "subheading",
        text: "8. Microbiome Research",
      },
      {
        type: "paragraph",
        text: "NGS allows scientists to study entire microbial communities within an environment, such as the human gut, without needing to culture individual organisms. This has significantly advanced our understanding of the microbiome's role in digestion, immunity, and overall health.",
      },
      {
        type: "heading",
        text: "Challenges and Considerations",
      },
      {
        type: "paragraph",
        text: "Despite its transformative potential, NGS is not without limitations. The sheer volume of data generated requires substantial computational infrastructure and bioinformatics expertise to interpret meaningfully. Additionally, questions around data privacy, informed consent, and the clinical interpretation of variants of uncertain significance remain active areas of discussion within the scientific and medical communities.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Next-Generation Sequencing has fundamentally changed the pace and scope of genomic research, making it possible to answer questions that were previously out of reach. From diagnosing rare diseases to tracking viral outbreaks and improving crop yields, its applications continue to expand across nearly every field connected to biology and medicine. As sequencing costs continue to fall and technology improves further, NGS is likely to become an even more integral part of both clinical practice and scientific discovery in the years ahead.",
      },
      {
        type: "disclaimer",
        text: "This article is intended for general informational purposes only.",
      },
    ],
  },
  {
    id: 3,
    title: "Offers clarity through non-invasive prenatal",
    fullTitle: "Offers clarity through non-invasive prenatal testing",
    slug: "offers-clarity-through-non-invasive-prenatal",
    image: "/assets/bl2.svg",
    publishedAt: "2026-05-20",
    category: "Prenatal",
    type: "Guide",
    excerpt:
      "Non-invasive prenatal testing provides clearer insights for expectant parents with reduced procedural risk.",
    content: [
      {
        type: "paragraph",
        text: "Non-invasive prenatal testing analyzes cell-free fetal DNA from a maternal blood sample to screen for common chromosomal conditions with high accuracy and no procedural risk to the pregnancy.",
      },
    ],
  },
  {
    id: 4,
    title: "Is It in Your Genes?",
    fullTitle: "Is It in Your Genes?",
    slug: "is-it-in-your-genes",
    image: "/assets/bl2.svg",
    publishedAt: "2026-04-08",
    category: "Diagnostics",
    type: "News",
    excerpt:
      "Understanding how genetic markers influence health risks and guide preventive screening decisions.",
    content: [
      {
        type: "paragraph",
        text: "Genetic markers can reveal predispositions that traditional tests may miss, helping clinicians tailor prevention and monitoring strategies for each individual.",
      },
    ],
  },
];

export function formatBlogDate(isoDate) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(`${isoDate}T12:00:00`));
  } catch {
    return isoDate;
  }
}

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}
