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
    title: "Offers clarity through non-invasive prenatal testing",
    fullTitle: "Offering Clarity Through Non-Invasive Prenatal Testing",
    slug: "offers-clarity-through-non-invasive-prenatal",
    image: "/assets/blog-nipt-clarity.svg",
    publishedAt: "2026-07-17",
    category: "Prenatal",
    type: "Guide",
    excerpt:
      "Non-Invasive Prenatal Testing offers expecting parents clarity and peace of mind without putting the pregnancy at risk. Here's what NIPT is, how it works, and why it's trusted in modern maternal healthcare.",
    content: [
      {
        type: "heading",
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "Pregnancy brings with it a mixture of excitement and uncertainty, and for many expecting parents, questions about their baby's health can weigh heavily during those early months. Non-Invasive Prenatal Testing (NIPT) has emerged as one of the most significant advances in prenatal care, offering expecting parents clarity and peace of mind without putting the pregnancy at risk. This article explains what NIPT is, how it works, and why it has become an increasingly trusted option in modern maternal healthcare.",
      },
      {
        type: "heading",
        text: "What Is Non-Invasive Prenatal Testing?",
      },
      {
        type: "paragraph",
        text: "Non-Invasive Prenatal Testing is a screening method that analyzes small fragments of fetal DNA circulating in the mother's bloodstream. During pregnancy, the placenta releases fragments of the baby's DNA into the mother's blood, and by the tenth week of pregnancy, enough of this genetic material is typically present to allow for accurate analysis. A simple maternal blood draw is all that is required, making the test far less invasive than earlier prenatal screening methods.",
      },
      {
        type: "heading",
        text: "How NIPT Works",
      },
      {
        type: "paragraph",
        text: "Once a blood sample is collected, laboratory technicians isolate the fetal DNA fragments and analyze them using advanced sequencing technology. This analysis allows clinicians to screen for extra or missing chromosomes, which can indicate conditions such as Down syndrome, Edwards syndrome, or Patau syndrome. Because the test relies solely on a blood draw rather than accessing the amniotic sac or placenta directly, it carries no physical risk to the fetus.",
      },
      {
        type: "heading",
        text: "Why NIPT Offers Greater Clarity",
      },
      {
        type: "subheading",
        text: "A Safer Alternative to Invasive Procedures",
      },
      {
        type: "paragraph",
        text: "Traditional diagnostic procedures such as amniocentesis and chorionic villus sampling (CVS) involve inserting a needle into the uterus to collect genetic material directly. While highly accurate, these procedures carry a small but real risk of miscarriage. NIPT eliminates this risk entirely, allowing parents to gain valuable genetic information without any physical danger to the pregnancy.",
      },
      {
        type: "subheading",
        text: "High Accuracy for Common Conditions",
      },
      {
        type: "paragraph",
        text: "NIPT has demonstrated strong accuracy in detecting common chromosomal conditions, particularly Down syndrome, making it a far more reliable screening option than older methods such as the first-trimester combined screening, which relies on blood markers and ultrasound measurements alone.",
      },
      {
        type: "subheading",
        text: "Early Detection, Earlier Peace of Mind",
      },
      {
        type: "paragraph",
        text: "Because NIPT can be performed as early as the tenth week of pregnancy, expecting parents receive information much sooner than they would with other diagnostic approaches. This early insight allows more time for informed decision-making, additional counseling if needed, and better preparation for the road ahead.",
      },
      {
        type: "subheading",
        text: "Reduced Need for Invasive Follow-Up Testing",
      },
      {
        type: "paragraph",
        text: "By offering highly reliable results upfront, NIPT reduces the number of pregnancies that require invasive diagnostic confirmation. Only in cases where NIPT results indicate an elevated risk do doctors typically recommend a follow-up diagnostic procedure, sparing most families from an unnecessary invasive test.",
      },
      {
        type: "heading",
        text: "Important Considerations",
      },
      {
        type: "paragraph",
        text: "While NIPT offers considerable clarity, it is important to understand that it is a screening test, not a diagnostic one. A high-risk result does not confirm a chromosomal condition with certainty; it indicates the need for further diagnostic testing to confirm the finding. Additionally, NIPT is most accurate for the conditions it is specifically designed to screen for and may not detect every possible genetic or structural abnormality. Genetic counseling is strongly recommended both before and after testing to help parents fully understand their results and the options available to them.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Non-Invasive Prenatal Testing has transformed the prenatal care experience by giving expecting parents a safer, earlier, and more reliable way to gain insight into their baby's genetic health. By removing the physical risks associated with older diagnostic methods, NIPT allows families to approach pregnancy with greater confidence and clarity, while still leaving room for further medical guidance when needed.",
      },
      {
        type: "disclaimer",
        text: "This article is intended for general informational purposes only and does not constitute medical advice. Expecting parents should consult a qualified healthcare provider or genetic counselor for guidance specific to their pregnancy.",
      },
    ],
  },
  {
    id: 4,
    title: "Is It in Your Genes?",
    fullTitle: "Is It in Your Genes? Understanding the Role of Heredity in Health",
    slug: "is-it-in-your-genes",
    image: "/assets/bl2.svg",
    publishedAt: "2026-07-17",
    category: "Diagnostics",
    type: "News",
    excerpt:
      "How much of who we are, and what illnesses we may face, is truly determined by our genes? A look at where heredity's influence begins, and where it ends.",
    content: [
      {
        type: "heading",
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "\u201cIt runs in the family\u201d is a phrase most people have heard at some point, whether in reference to height, personality traits, or a parent's medical condition. But how much of who we are, and what illnesses we may face, is truly determined by our genes? As genetic science has advanced, researchers have gained a clearer picture of how heredity shapes our health, and just as importantly, where its influence ends. This article explores what it really means for something to be \u201cin your genes.\u201d",
      },
      {
        type: "heading",
        text: "The Basics of Genetic Inheritance",
      },
      {
        type: "paragraph",
        text: "Every person inherits half of their genetic material from each parent, combining to form a unique genetic blueprint. This blueprint influences everything from eye color and blood type to susceptibility toward certain diseases. Some traits are governed by a single gene and follow predictable inheritance patterns, while others, particularly common health conditions, are influenced by multiple genes acting together, often in combination with environmental factors.",
      },
      {
        type: "heading",
        text: "Conditions Strongly Linked to Genetics",
      },
      {
        type: "paragraph",
        text: "Certain conditions are directly caused by mutations in a single gene and are passed down according to well-established inheritance patterns. Examples include cystic fibrosis, sickle cell disease, and Huntington's disease. In these cases, inheriting a specific gene mutation significantly increases, or in some instances guarantees, the likelihood of developing the condition. Genetic testing can often identify these mutations with a high degree of certainty, allowing for early intervention or informed family planning.",
      },
      {
        type: "heading",
        text: "Conditions Influenced by Genetics, But Not Determined by It",
      },
      {
        type: "paragraph",
        text: "Many of the most common health concerns, such as heart disease, type 2 diabetes, and certain cancers, are far more complex. These conditions typically arise from a combination of multiple genetic variants, each contributing a small amount of risk, along with lifestyle and environmental factors such as diet, physical activity, and exposure to toxins. Having a family history of these conditions increases risk, but it does not guarantee that an individual will develop the disease. In these cases, genetics loads the gun, but lifestyle often pulls the trigger.",
      },
      {
        type: "heading",
        text: "The Role of Family Health History",
      },
      {
        type: "paragraph",
        text: "Even without formal genetic testing, a detailed family health history remains one of the most valuable tools for assessing personal health risk. Patterns such as multiple relatives developing the same condition, or conditions appearing at unusually young ages, can signal an elevated genetic risk worth discussing with a healthcare provider. This information often guides decisions around screening schedules, preventive care, and, when appropriate, referral for genetic counseling.",
      },
      {
        type: "heading",
        text: "What Genetic Testing Can and Cannot Tell You",
      },
      {
        type: "paragraph",
        text: "Modern genetic testing has made it possible to identify specific inherited mutations associated with various conditions. However, it is important to understand its limitations. A positive result for a risk-associated gene does not always mean a person will develop the condition, and a negative result does not guarantee immunity from it. Genetic testing is best understood as one piece of a larger puzzle, most useful when interpreted alongside family history, lifestyle factors, and guidance from a qualified professional.",
      },
      {
        type: "heading",
        text: "Nature and Environment Working Together",
      },
      {
        type: "paragraph",
        text: "Perhaps the most important takeaway in modern genetics is that genes and environment rarely act in isolation. This interaction, often referred to as gene-environment interplay, means that even individuals with a strong genetic predisposition toward a condition can often reduce their risk through informed lifestyle choices, while those without significant genetic risk factors are not necessarily immune to developing the same conditions.",
      },
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "So, is it in your genes? For some conditions, the answer is largely yes. For many others, genetics is only part of a much larger story that includes environment, lifestyle, and chance. Understanding your family health history and, where appropriate, pursuing genetic counseling or testing can offer valuable insight into your personal risk profile, empowering more informed decisions about your long-term health.",
      },
      {
        type: "disclaimer",
        text: "This article is intended for general informational purposes only and does not constitute medical advice. Individuals concerned about hereditary health risks should consult a qualified healthcare provider or genetic counselor.",
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
