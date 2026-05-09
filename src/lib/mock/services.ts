// // src/lib/mock/services.ts

// import { Service } from '@/types/service';

// export const services: Service[] = [
//   {
//     id: 1,
//     slug: 'legal-consultation',
//     title: 'Legal Consultation Services',
//     titleAr: 'خدمات الاستشارات القانونية',
//     excerpt:
//       'Law Firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and specialized legal support to meet our clients needs and offer the best legal solutions in various cases and legal fields.',
//     excerptAr:
//       'يُعدّ مكتبنا من أبرز المكاتب القانونية التي تقدم خدمات استشارية متميزة للأفراد والشركات. مهمتنا تقديم دعم قانوني شامل ومتخصص لتلبية احتياجات موكلينا وتقديم أفضل الحلول القانونية.',
//     body: [
//       {
//         subheading: 'General Legal Consultations',
//         subheadingAr: 'الاستشارات القانونية العامة',
//         paragraph:
//           'At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws.',
//         paragraphAr:
//           'نقدم في مكتبنا استشارات قانونية شاملة تغطي جميع الجوانب القانونية التي قد يواجهها موكلونا في حياتهم اليومية أو أنشطتهم التجارية.',
//       },
//       {
//         subheading: 'Corporate Legal Consultations',
//         subheadingAr: 'الاستشارات القانونية للشركات',
//         paragraph:
//           'We at the Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses.',
//         paragraphAr: 'ندرك في مكتبنا أهمية الاستشارات القانونية للشركات في بناء أعمالها وتعزيزها.',
//         bullets: [
//           'Our advisory services about:',
//           'Establishing and registering companies.',
//           'All kinds of contracts and agreements.',
//           'Commercial disputes.',
//           'Compliance with local and international laws and regulations.',
//         ],
//         bulletsAr: [
//           'تشمل خدماتنا الاستشارية:',
//           'تأسيس الشركات وتسجيلها.',
//           'جميع أنواع العقود والاتفاقيات.',
//           'النزاعات التجارية.',
//           'الامتثال للقوانين واللوائح المحلية والدولية.',
//         ],
//       },
//       {
//         subheading: 'Individual Legal Consultations',
//         subheadingAr: 'الاستشارات القانونية للأفراد',
//         paragraph: 'Law Firm offers customized advisory services for individuals, including:',
//         paragraphAr: 'يقدم مكتبنا خدمات استشارية مخصصة للأفراد، تشمل:',
//         bullets: [
//           'Family issues such as divorce, alimony, and custody.',
//           'Real estate matters like buying, selling, and renting properties.',
//           'Employment issues such as hiring and wrongful termination.',
//           'Criminal cases and defending personal rights.',
//         ],
//         bulletsAr: [
//           'قضايا الأسرة كالطلاق والنفقة والحضانة.',
//           'المسائل العقارية كالبيع والشراء والتأجير.',
//           'قضايا العمل كالتوظيف والفصل التعسفي.',
//           'القضايا الجنائية والدفاع عن الحقوق الشخصية.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-1.jpg',
//     seoTitle: 'Legal Consultation Services | IO-TECH',
//     seoTitleAr: 'خدمات الاستشارات القانونية | IO-TECH',
//     seoDescription:
//       'Comprehensive legal consultation services for individuals and companies in Saudi Arabia.',
//     seoDescriptionAr: 'خدمات استشارات قانونية شاملة للأفراد والشركات في المملكة العربية السعودية.',
//   },
//   {
//     id: 2,
//     slug: 'foreign-investment',
//     title: 'Foreign Investment Services',
//     titleAr: 'خدمات الاستثمار الأجنبي',
//     excerpt:
//       'We provide specialized legal support for foreign investors looking to establish and grow their business presence in the Kingdom of Saudi Arabia, in alignment with Vision 2030.',
//     excerptAr:
//       'نقدم دعمًا قانونيًا متخصصًا للمستثمرين الأجانب الراغبين في تأسيس أعمالهم وتنميتها في المملكة العربية السعودية بما يتوافق مع رؤية 2030.',
//     body: [
//       {
//         subheading: 'Investment Setup & Licensing',
//         subheadingAr: 'إعداد الاستثمار والترخيص',
//         paragraph:
//           'We guide foreign investors through the full licensing and registration process with MISA and other relevant authorities.',
//         paragraphAr:
//           'نرشد المستثمرين الأجانب خلال عملية الترخيص والتسجيل الكاملة لدى هيئة الاستثمار والجهات المعنية الأخرى.',
//         bullets: [
//           'Company registration with MISA.',
//           'Commercial registration and municipal licensing.',
//           'Opening corporate bank accounts.',
//           'Visa and residency support for investors.',
//         ],
//         bulletsAr: [
//           'تسجيل الشركات لدى هيئة الاستثمار.',
//           'السجل التجاري والترخيص البلدي.',
//           'فتح الحسابات المصرفية للشركات.',
//           'دعم التأشيرات والإقامة للمستثمرين.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-2.jpg',
//     seoTitle: 'Foreign Investment Services | IO-TECH',
//     seoTitleAr: 'خدمات الاستثمار الأجنبي | IO-TECH',
//     seoDescription: 'Legal support for foreign investors in Saudi Arabia.',
//     seoDescriptionAr: 'دعم قانوني للمستثمرين الأجانب في المملكة العربية السعودية.',
//   },
//   {
//     id: 3,
//     slug: 'contracts',
//     title: 'Contracts',
//     titleAr: 'العقود',
//     excerpt:
//       'Our contracts practice covers drafting, reviewing, and negotiating all types of commercial and civil contracts to protect our clients interests.',
//     excerptAr:
//       'تشمل ممارستنا في مجال العقود صياغة ومراجعة والتفاوض على جميع أنواع العقود التجارية والمدنية لحماية مصالح موكلينا.',
//     body: [
//       {
//         subheading: 'Contract Drafting & Review',
//         subheadingAr: 'صياغة العقود ومراجعتها',
//         paragraph:
//           'We draft and review contracts with precision, ensuring full legal protection for all parties involved.',
//         paragraphAr:
//           'نصوغ العقود ونراجعها بدقة، مع ضمان الحماية القانونية الكاملة لجميع الأطراف المعنية.',
//         bullets: [
//           'Commercial and corporate contracts.',
//           'Employment and service agreements.',
//           'Real estate and lease contracts.',
//           'Partnership and joint venture agreements.',
//         ],
//         bulletsAr: [
//           'العقود التجارية والشركات.',
//           'اتفاقيات العمل والخدمات.',
//           'عقود العقارات والإيجار.',
//           'اتفاقيات الشراكة والمشاريع المشتركة.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-3.jpg',
//     seoTitle: 'Contracts | IO-TECH',
//     seoTitleAr: 'العقود | IO-TECH',
//     seoDescription: 'Professional contract drafting, review and negotiation services.',
//     seoDescriptionAr: 'خدمات احترافية لصياغة العقود ومراجعتها والتفاوض عليها.',
//   },
//   {
//     id: 4,
//     slug: 'notarization',
//     title: 'Notarization',
//     titleAr: 'التوثيق',
//     excerpt:
//       'We provide full notarization and authentication services for legal documents, ensuring compliance with Saudi and international standards.',
//     excerptAr:
//       'نقدم خدمات التوثيق والتصديق الكاملة للوثائق القانونية، مع ضمان الامتثال للمعايير السعودية والدولية.',
//     body: [
//       {
//         subheading: 'Document Notarization',
//         subheadingAr: 'توثيق المستندات',
//         paragraph: 'Our team handles all notarization needs efficiently and accurately.',
//         paragraphAr: 'يتولى فريقنا جميع احتياجات التوثيق بكفاءة ودقة.',
//         bullets: [
//           'Official document authentication.',
//           'Power of attorney notarization.',
//           'Corporate document legalization.',
//           'Cross-border document certification.',
//         ],
//         bulletsAr: [
//           'توثيق المستندات الرسمية.',
//           'توثيق التوكيلات الرسمية.',
//           'إضفاء الشرعية على وثائق الشركات.',
//           'توثيق المستندات عبر الحدود.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-1.jpg',
//     seoTitle: 'Notarization | IO-TECH',
//     seoTitleAr: 'التوثيق | IO-TECH',
//     seoDescription: 'Professional notarization and document authentication services.',
//     seoDescriptionAr: 'خدمات احترافية للتوثيق وتصديق المستندات.',
//   },
//   {
//     id: 5,
//     slug: 'corporate-governance',
//     title: 'Corporate Governance Services',
//     titleAr: 'خدمات حوكمة الشركات',
//     excerpt:
//       'We help companies establish strong governance frameworks that ensure compliance, transparency, and sustainable growth.',
//     excerptAr: 'نساعد الشركات على وضع أطر حوكمة قوية تضمن الامتثال والشفافية والنمو المستدام.',
//     body: [
//       {
//         subheading: 'Governance Framework',
//         subheadingAr: 'إطار الحوكمة',
//         paragraph:
//           "We design and implement governance structures tailored to each company's size, sector, and regulatory environment.",
//         paragraphAr: 'نصمم ونطبق هياكل حوكمة مخصصة لحجم كل شركة وقطاعها وبيئتها التنظيمية.',
//         bullets: [
//           'Board structure and bylaws.',
//           'Compliance and risk management policies.',
//           'Shareholder rights and obligations.',
//           'Internal audit frameworks.',
//         ],
//         bulletsAr: [
//           'هيكل مجلس الإدارة والنظام الأساسي.',
//           'سياسات الامتثال وإدارة المخاطر.',
//           'حقوق المساهمين والتزاماتهم.',
//           'أطر التدقيق الداخلي.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-2.jpg',
//     seoTitle: 'Corporate Governance Services | IO-TECH',
//     seoTitleAr: 'خدمات حوكمة الشركات | IO-TECH',
//     seoDescription: 'Corporate governance consulting and framework implementation.',
//     seoDescriptionAr: 'استشارات حوكمة الشركات وتطبيق الأطر المؤسسية.',
//   },
//   // --- NEW MOCK DATA STARTS HERE ---
//   {
//     id: 6,
//     slug: 'dispute-resolution',
//     title: 'Dispute Resolution & Litigation',
//     titleAr: 'تسوية المنازعات والقضايا',
//     excerpt:
//       'We represent clients in complex litigation and arbitration proceedings, striving for efficient and favorable resolutions to commercial and civil disputes.',
//     excerptAr:
//       'نمثل الموكلين في إجراءات التقاضي والتحكيم المعقدة، ونسعى لتسوية المنازعات التجارية والمدنية بكفاءة ونتائج إيجابية.',
//     body: [
//       {
//         subheading: 'Litigation Strategy',
//         subheadingAr: 'استراتيجية التقاضي',
//         paragraph:
//           'Our legal team develops robust strategies tailored to the specifics of each case.',
//         paragraphAr: 'يطور فريقنا القانوني استراتيجيات قوية مخصصة لتفاصيل كل قضية.',
//         bullets: [
//           'Commercial and civil litigation.',
//           'Arbitration and mediation.',
//           'Enforcement of judgments.',
//           'Appellate court representation.',
//         ],
//         bulletsAr: [
//           'التقاضي التجاري والمدني.',
//           'التحكيم والوساطة.',
//           'تنفيذ الأحكام.',
//           'التمثيل أمام محاكم الاستئناف.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-3.jpg',
//     seoTitle: 'Dispute Resolution & Litigation | IO-TECH',
//     seoTitleAr: 'تسوية المنازعات والقضايا | IO-TECH',
//     seoDescription: 'Expert litigation and dispute resolution services.',
//     seoDescriptionAr: 'خدمات تقاضي وتسوية منازعات متميزة.',
//   },
//   {
//     id: 7,
//     slug: 'real-estate-law',
//     title: 'Real Estate Law',
//     titleAr: 'القانون العقاري',
//     excerpt:
//       'From property acquisition to zoning compliance, we offer comprehensive legal services for real estate developers, investors, and tenants.',
//     excerptAr:
//       'من اكتساب العقارات إلى الامتثال لتقسيم المناطق، نقدم خدمات قانونية شاملة للمطورين العقاريين والمستثمرين والمستأجرين.',
//     body: [
//       {
//         subheading: 'Property Transactions',
//         subheadingAr: 'المعاملات العقارية',
//         paragraph: 'We facilitate smooth and legally sound real estate transactions.',
//         paragraphAr: 'نسهل المعاملات العقارية بسلاسة وبشكل قانوني سليم.',
//         bullets: [
//           'Due diligence for property purchases.',
//           'Drafting sale and lease agreements.',
//           'Resolving landlord-tenant disputes.',
//           'Real estate development compliance.',
//         ],
//         bulletsAr: [
//           'العناية الواجبة لعمليات شراء العقارات.',
//           'صياغة اتفاقيات البيع والإيجار.',
//           'حل نزاعات المالك والمستأجر.',
//           'الامتثال لتطوير العقارات.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-1.jpg',
//     seoTitle: 'Real Estate Law | IO-TECH',
//     seoTitleAr: 'القانون العقاري | IO-TECH',
//     seoDescription: 'Comprehensive real estate legal services.',
//     seoDescriptionAr: 'خدمات قانونية عقارية شاملة.',
//   },
//   {
//     id: 8,
//     slug: 'labor-employment-law',
//     title: 'Labor & Employment Law',
//     titleAr: 'قانون العمل والعمالة',
//     excerpt:
//       'We provide expert guidance on Saudi labor law, helping employers manage their workforce compliantly and assisting employees in defending their rights.',
//     excerptAr:
//       'نقدم إرشادات خبيرة حول قانون العمل السعودي، مما يساعد أصحاب العمل على إدارة قوة العمل بشكل متوافق ويساعد الموظفين في الدفاع عن حقوقهم.',
//     body: [
//       {
//         subheading: 'Workforce Management',
//         subheadingAr: 'إدارة القوى العاملة',
//         paragraph: 'Stay compliant with the dynamic Saudi labor market regulations.',
//         paragraphAr: 'ابقَ متوافقًا مع لوائح سوق العمل السعودي الديناميكية.',
//         bullets: [
//           'Drafting employment contracts.',
//           'Handling wrongful termination claims.',
//           'Resolving labor disputes (Wudi).',
//           'Visa and Saudization compliance.',
//         ],
//         bulletsAr: [
//           'صياغة عقود العمل.',
//           'التعامل مع مطالبات الفصل التعسفي.',
//           'حل النزاعات العمالية.',
//           'الامتثال للتأشيرات والسعودة.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-2.jpg',
//     seoTitle: 'Labor & Employment Law | IO-TECH',
//     seoTitleAr: 'قانون العمل والعمالة | IO-TECH',
//     seoDescription: 'Legal support for labor and employment matters.',
//     seoDescriptionAr: 'دعم قانوني لشؤون العمل والعمالة.',
//   },
//   {
//     id: 9,
//     slug: 'family-law',
//     title: 'Family Law',
//     titleAr: 'قانون الأسرة',
//     excerpt:
//       'We handle sensitive family legal matters with the utmost confidentiality and empathy, including divorce, custody, and inheritance cases.',
//     excerptAr:
//       'نتعامل مع المسائل القانونية الأسرية الحساسة بأقصى درجات السرية والتعاطف، بما في ذلك قضايا الطلاق والحضانة والميراث.',
//     body: [
//       {
//         subheading: 'Personal Status',
//         subheadingAr: 'الأحوال الشخصية',
//         paragraph:
//           'Navigating personal status laws requires experienced and compassionate legal counsel.',
//         paragraphAr: 'يتطلب التنقل في قوانين الأحوال الشخصية مستشارين قانونيين ذوي خبرة وتعاطف.',
//         bullets: [
//           'Divorce and separation agreements.',
//           'Child custody and visitation rights.',
//           'Alimony and financial settlements.',
//           'Inheritance and will drafting.',
//         ],
//         bulletsAr: [
//           'اتفاقيات الطلاق والانفصال.',
//           'حقوق حضانة الأطفال والزيارة.',
//           'النفقة والتسويات المالية.',
//           'الميراث وصياغة الوصايا.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-3.jpg',
//     seoTitle: 'Family Law | IO-TECH',
//     seoTitleAr: 'قانون الأسرة | IO-TECH',
//     seoDescription: 'Sensitive and expert family law representation.',
//     seoDescriptionAr: 'تمثيل قانوني خبير وحساس في قضايا الأسرة.',
//   },
//   {
//     id: 10,
//     slug: 'intellectual-property',
//     title: 'Intellectual Property',
//     titleAr: 'الملكية الفكرية',
//     excerpt:
//       'Protect your innovations, brands, and creative works. We handle IP registration, licensing, and infringement disputes across the Kingdom.',
//     excerptAr:
//       'احمِ ابتكاراتك وعلاماتك التجارية وأعمالك الإبداعية. نتولى تسجيل الملكية الفكرية والترخيص ونزاعات الانتهاك في جميع أنحاء المملكة.',
//     body: [
//       {
//         subheading: 'IP Protection',
//         subheadingAr: 'حماية الملكية الفكرية',
//         paragraph: 'Safeguarding your intellectual assets is crucial in a knowledge-based economy.',
//         paragraphAr: 'إن حماية أصولك الفكرية أمر بالغ الأهمية في الاقتصاد القائم على المعرفة.',
//         bullets: [
//           'Trademark and patent registration.',
//           'Copyright protection.',
//           'IP licensing and technology transfer.',
//           'Combating IP infringement.',
//         ],
//         bulletsAr: [
//           'تسجيل العلامات التجارية وبراءات الاختراع.',
//           'حماية حقوق النشر.',
//           'ترخيص الملكية الفكرية ونقل التكنولوجيا.',
//           'مكافحة انتهاكات الملكية الفكرية.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-1.jpg',
//     seoTitle: 'Intellectual Property | IO-TECH',
//     seoTitleAr: 'الملكية الفكرية | IO-TECH',
//     seoDescription: 'Comprehensive intellectual property legal services.',
//     seoDescriptionAr: 'خدمات قانونية شاملة للملكية الفكرية.',
//   },
//   {
//     id: 11,
//     slug: 'tax-law',
//     title: 'Tax Law & Zakat',
//     titleAr: 'قانون الضرائب والزكاة',
//     excerpt:
//       'We assist businesses in navigating Saudi tax regulations, Zakat obligations, and VAT compliance to avoid penalties and optimize tax liabilities.',
//     excerptAr:
//       'نساعد الشركات في التنقل بين لوائح الضرائب السعودية والتزامات الزكاة والامتثال لضريبة القيمة المضافة لتجنب العقوبات وتحسين الالتزامات الضريبية.',
//     body: [
//       {
//         subheading: 'Tax Compliance',
//         subheadingAr: 'الامتثال الضريبي',
//         paragraph: 'Ensure your business meets all local and international tax requirements.',
//         paragraphAr: 'تأكد من أن أعمالك تلبي جميع المتطلبات الضريبية المحلية والدولية.',
//         bullets: [
//           'VAT registration and filing.',
//           'Zakat calculations and declarations.',
//           'Transfer pricing documentation.',
//           'Tax dispute resolution with ZATCA.',
//         ],
//         bulletsAr: [
//           'تسجيل ورفع ضريبة القيمة المضافة.',
//           'حسابات وإقرارات الزكاة.',
//           'وثائق التسعير الانتقالي.',
//           'حل النزاعات الضريبية مع هيئة الزكاة.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-2.jpg',
//     seoTitle: 'Tax Law & Zakat | IO-TECH',
//     seoTitleAr: 'قانون الضرائب والزكاة | IO-TECH',
//     seoDescription: 'Tax planning, Zakat, and VAT compliance services.',
//     seoDescriptionAr: 'خدمات التخطيط الضريبي والزكاة والامتثال لضريبة القيمة المضافة.',
//   },
//   {
//     id: 12,
//     slug: 'banking-finance-law',
//     title: 'Banking & Finance Law',
//     titleAr: 'قانون البنوك والتمويل',
//     excerpt:
//       'We advise banks, financial institutions, and corporate borrowers on complex financing structures, regulatory compliance, and debt recovery.',
//     excerptAr:
//       'ننصح البنوك والمؤسسات المالية والمقترضين الشركات حول هياكل التمويل المعقدة والامتثال التنظيمي وتحصيل الديون.',
//     body: [
//       {
//         subheading: 'Financial Services',
//         subheadingAr: 'الخدمات المالية',
//         paragraph:
//           'Navigate the complexities of Islamic and conventional finance with our legal experts.',
//         paragraphAr: 'تنقل بين تعقيدات التمويل الإسلامي والتقليدي مع خبرائنا القانونيين.',
//         bullets: [
//           'Syndicated loan structuring.',
//           'Sukuk and Islamic finance compliance.',
//           'Regulatory advice for SAMA compliance.',
//           'Debt restructuring and recovery.',
//         ],
//         bulletsAr: [
//           'هيكلة القروض المشتركة.',
//           'الامتثال للصكوك والتمويل الإسلامي.',
//           'نصائح تنظيمية للامتثال لمؤسسة النقد.',
//           'إعادة هيكلة الديون وتحصيلها.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-3.jpg',
//     seoTitle: 'Banking & Finance Law | IO-TECH',
//     seoTitleAr: 'قانون البنوك والتمويل | IO-TECH',
//     seoDescription: 'Expert legal advice for banking and financial transactions.',
//     seoDescriptionAr: 'نصائح قانونية خبيرة للمعاملات المصرفية والمالية.',
//   },
//   {
//     id: 13,
//     slug: 'mergers-acquisitions',
//     title: 'Mergers & Acquisitions',
//     titleAr: 'عمليات الاندماج والاستحواذ',
//     excerpt:
//       'We guide clients through every stage of M&A transactions, from due diligence and valuation to negotiation and post-merger integration.',
//     excerptAr:
//       'نرشد الموكلين عبر كل مرحلة من مراحل معاملات الاندماج والاستحواذ، من العناية الواجبة والتقييم إلى التفاوض والدمج بعد الصفقة.',
//     body: [
//       {
//         subheading: 'M&A Transactions',
//         subheadingAr: 'معاملات الاندماج والاستحواذ',
//         paragraph: 'Executing successful M&A deals requires meticulous legal planning.',
//         paragraphAr: 'يتطلب تنفيذ صفقات اندماج واستحواذ ناجحة تخطيطًا قانونيًا دقيقًا.',
//         bullets: [
//           'Target company due diligence.',
//           'Deal structuring and negotiation.',
//           'Drafting share purchase agreements.',
//           'Regulatory approvals and filings.',
//         ],
//         bulletsAr: [
//           'العناية الواجبة للشركة المستهدفة.',
//           'هيكلة الصفقة والتفاوض.',
//           'صياغة اتفاقيات شراء الأسهم.',
//           'الموافقات التنظيمية والتقديمات.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-1.jpg',
//     seoTitle: 'Mergers & Acquisitions | IO-TECH',
//     seoTitleAr: 'عمليات الاندماج والاستحواذ | IO-TECH',
//     seoDescription: 'End-to-end legal support for M&A transactions.',
//     seoDescriptionAr: 'دعم قانوني شامل لمعاملات الاندماج والاستحواذ.',
//   },
//   {
//     id: 14,
//     slug: 'regulatory-compliance',
//     title: 'Regulatory Compliance',
//     titleAr: 'الامتثال التنظيمي',
//     excerpt:
//       'We help businesses align their operations with local laws and industry-specific regulations, minimizing legal risks and avoiding costly fines.',
//     excerptAr:
//       'نساعد الشركات على محاذاة عملياتها مع القوانين المحلية واللوائح الخاصة بالقطاع، مما يقلل المخاطر القانونية وتجنب الغرامات الباهظة.',
//     body: [
//       {
//         subheading: 'Compliance Strategy',
//         subheadingAr: 'استراتيجية الامتثال',
//         paragraph:
//           'A proactive approach to compliance protects your business from future liabilities.',
//         paragraphAr: 'النهج الاستباقي للامتثال يحمي أعمالك من المسؤوليات المستقبلية.',
//         bullets: [
//           'Regulatory risk assessments.',
//           'Drafting internal compliance policies.',
//           'Employee compliance training.',
//           'Government investigations defense.',
//         ],
//         bulletsAr: [
//           'تقييمات المخاطر التنظيمية.',
//           'صياغة سياسات الامتثال الداخلية.',
//           'تدريب الموظفين على الامتثال.',
//           'الدفاع في تحقيقات الحكومة.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-2.jpg',
//     seoTitle: 'Regulatory Compliance | IO-TECH',
//     seoTitleAr: 'الامتثال التنظيمي | IO-TECH',
//     seoDescription: 'Navigate complex regulatory environments safely.',
//     seoDescriptionAr: 'تنقل بأمان في البيئات التنظيمية المعقدة.',
//   },
//   {
//     id: 15,
//     slug: 'debt-collection',
//     title: 'Debt Collection',
//     titleAr: 'تحصيل الديون',
//     excerpt:
//       'Our debt recovery team uses legal negotiation and judicial proceedings to recover outstanding debts efficiently for businesses and individuals.',
//     excerptAr:
//       'يستخدم فريق تحصيل الديون لدينا التفاوض القانوني والإجراءات القضائية لاسترداد الديون المستحقة بكفاءة للشركات والأفراد.',
//     body: [
//       {
//         subheading: 'Debt Recovery',
//         subheadingAr: 'استرداد الديون',
//         paragraph: 'We employ strategic methods to secure the return of your funds.',
//         paragraphAr: 'نستخدم أساليب استراتيجية لضمان عودة أموالك.',
//         bullets: [
//           'Pre-litigation demand letters.',
//           'Negotiated settlement agreements.',
//           'Filing execution cases.',
//           'Asset tracing and freezing orders.',
//         ],
//         bulletsAr: [
//           'خطوط المطالبة قبل التقاضي.',
//           'اتفاقيات التسوية التفاوضية.',
//           'رفع دعاوى التنفيذ.',
//           'تتبع الأصول وأوامر التجميد.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-3.jpg',
//     seoTitle: 'Debt Collection | IO-TECH',
//     seoTitleAr: 'تحصيل الديون | IO-TECH',
//     seoDescription: 'Effective and legal debt recovery solutions.',
//     seoDescriptionAr: 'حلول تحصيل ديون فعالة وقانونية.',
//   },
//   {
//     id: 16,
//     slug: 'maritime-law',
//     title: 'Maritime Law',
//     titleAr: 'القانون البحري',
//     excerpt:
//       'We offer specialized legal services for the maritime industry, including shipping disputes, cargo claims, and vessel registration.',
//     excerptAr:
//       'نقدم خدمات قانونية متخصصة لقطاع الشحن البحري، بما في ذلك نزاعات الشحن ومطالبات البضائع وتسجيل السفن.',
//     body: [
//       {
//         subheading: 'Maritime Services',
//         subheadingAr: 'الخدمات البحرية',
//         paragraph: 'Navigate the complexities of international maritime regulations.',
//         paragraphAr: 'تنقل بين تعقيدات لوائح الشحن البحري الدولية.',
//         bullets: [
//           'Charter party disputes.',
//           'Cargo damage and loss claims.',
//           'Vessel financing and registration.',
//           'Maritime insurance claims.',
//         ],
//         bulletsAr: [
//           'نزاعات عقود الإيجار البحري.',
//           'مطالبات تلف وفقدان البضائع.',
//           'تمويل السفن وتسجيلها.',
//           'مطالبات التأمين البحري.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-1.jpg',
//     seoTitle: 'Maritime Law | IO-TECH',
//     seoTitleAr: 'القانون البحري | IO-TECH',
//     seoDescription: 'Expert legal counsel for the maritime sector.',
//     seoDescriptionAr: 'استشارات قانونية خبيرة لقطاع الشحن البحري.',
//   },
//   {
//     id: 17,
//     slug: 'technology-cyber-law',
//     title: 'Technology & Cyber Law',
//     titleAr: 'قانون التكنولوجيا والأمن السيبراني',
//     excerpt:
//       'We advise tech companies and startups on data privacy, e-commerce regulations, and cybersecurity compliance in accordance with Saudi law.',
//     excerptAr:
//       'ننصح شركات التكنولوجيا والشركات الناشئة حول خصوصية البيانات ولوائح التجارة الإلكترونية والامتثال للأمن السيبراني وفقًا للقانون السعودي.',
//     body: [
//       {
//         subheading: 'Digital Compliance',
//         subheadingAr: 'الامتثال الرقمي',
//         paragraph: 'Protect your digital assets and ensure compliance with NDMO and PDPL.',
//         paragraphAr:
//           'احمِ أصولك الرقمية وتأكد من الامتثال لهيئة الحكومة الرقمية ونظام حماية البيانات الشخصية.',
//         bullets: [
//           'Data privacy and PDPL compliance.',
//           'SaaS and software licensing agreements.',
//           'E-commerce terms and conditions.',
//           'Cyber incident response and liability.',
//         ],
//         bulletsAr: [
//           'خصوصية البيانات والامتثال لنظام حماية البيانات.',
//           'اتفاقيات ترخيص البرمجيات كخدمة.',
//           'شروط وأحكام التجارة الإلكترونية.',
//           'الاستجابة للحوادث السيبرانية والمسؤولية.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-2.jpg',
//     seoTitle: 'Technology & Cyber Law | IO-TECH',
//     seoTitleAr: 'قانون التكنولوجيا والأمن السيبراني | IO-TECH',
//     seoDescription: 'Legal support for the digital economy.',
//     seoDescriptionAr: 'دعم قانوني للاقتصاد الرقمي.',
//   },
//   {
//     id: 18,
//     slug: 'insurance-law',
//     title: 'Insurance Law',
//     titleAr: 'قانون التأمين',
//     excerpt:
//       'We provide legal counsel on insurance regulatory matters, policy drafting, and claims disputes to ensure fair outcomes for insurers and insured parties.',
//     excerptAr:
//       'نقدم استشارات قانونية حول المسائل التنظيمية للتأمين وصياغة الوثائق ونزاعات المطالبات لضمان نتائج عادلة للمؤمنين وأطراف التأمين.',
//     body: [
//       {
//         subheading: 'Insurance Services',
//         subheadingAr: 'خدمات التأمين',
//         paragraph: 'Ensure your insurance operations and claims are handled legally and fairly.',
//         paragraphAr: 'تأكد من أن عمليات التأمين والمطالبات الخاصة بك تتم بشكل قانوني وعادل.',
//         bullets: [
//           'Insurance policy drafting and review.',
//           'Regulatory compliance with SAMA.',
//           'Claims denial and dispute resolution.',
//           'Reinsurance agreements.',
//         ],
//         bulletsAr: [
//           'صياغة ومراجعة وثائق التأمين.',
//           'الامتثال التنظيمي لمؤسسة النقد العربي السعودي.',
//           'رفض المطالبات وتسوية المنازعات.',
//           'اتفاقيات إعادة التأمين.',
//         ],
//       },
//     ],
//     coverImage: '/images/hero-bg-3.jpg',
//     seoTitle: 'Insurance Law | IO-TECH',
//     seoTitleAr: 'قانون التأمين | IO-TECH',
//     seoDescription: 'Comprehensive legal services for the insurance sector.',
//     seoDescriptionAr: 'خدمات قانونية شاملة لقطاع التأمين.',
//   },
// ];

// export function getServiceBySlug(slug: string): Service | undefined {
//   return services.find(s => s.slug === slug);
// }

// export function getAllServiceSlugs(): string[] {
//   return services.map(s => s.slug);
// }
