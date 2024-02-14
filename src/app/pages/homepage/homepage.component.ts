import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  ngOnInit(): void {
    const intervalTime = 20000; // 20 seconds in milliseconds
    interval(intervalTime).pipe(
      take(Infinity) // or the number of times you want to execute the code
    ).subscribe(() => this.nextStep());
  }
  items: any = [
    {
      title: 'Developers',
      view: 'view Developers',
      description:
        'Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.',
      img: 'https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Fa5e77243e1b2f4db155b.svg',
    },
    {
      title: 'Designers',
      view: 'view Designers',
      description:
        'Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators, animators, and more.',
      img: 'https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F7e0a8d27a603532eb7de.svg',
    },
    {
      title: 'Finance Experts',
      view: 'view Finance Experts',
      description:
        'Experts in financial modeling & valuation, startup funding, interim CFO work, and market sizing.',
      img: 'https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F9ca0f9bf58681837dc43.svg',
    },
    {
      title: 'Project Managers',
      view: 'view Project Managers',
      description:
        'Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools, frameworks, and styles.',
      img: 'https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F7d48a0edda07f52306cf.svg',
    },
    {
      title: 'Product Managers',
      view: 'view Product Managers',
      description:
        'Digital product managers, scrum product owners with expertise in numerous industries like banking, healthcare, ecommerce, and more.',
      img: 'https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F68515d99ab0796e07e2d.svg',
    },
    {
      title: 'Plus Thousands More Skills',
      description:
        'Whatever skill or specialization your business needs, we’ll find the right expert from our extensive talent network.',
      img: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    },
  ];

  collaborations = [
    {
      imageSrc:
        'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fpartnership_section%2Fpartnership%2Fcontent%2Fcover_image_file%2Fcover_image%2F1321805%2F0511AttractingTopTalent-Cover-waldek_1280X600-9991ef7eb31bfab455c3825916f83f2a.png&width=768',
      title: 'Toptal Partnership',
      location:
        'The Opportunity Loop: An Inside Look at How to Attract and Retain Top Talent',
      logo: [
        {
          logo: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2Fcontent%2Fdark_image_file%2Fdark_image%2F1315686%2Fmotorola_dark-5b95dfa9bf850cf13401546313247436.svg',
        },
        {
          logo: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2Fcontent%2Fdark_image_file%2Fdark_image%2F1315686%2Fmotorola_dark-5b95dfa9bf850cf13401546313247436.svg',
        },
      ],
    },
    {
      imageSrc:
        'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fpartnership_section%2Fpartnership%2Fcontent%2Fcover_image_file%2Fcover_image%2F1321805%2F0511AttractingTopTalent-Cover-waldek_1280X600-9991ef7eb31bfab455c3825916f83f2a.png&width=768',
      title: 'Toptal Partnership',
      location:
        'Industry Perspective: Salesforce On Team Alignment and Agile Talent',
      logo: [
        {
          logo: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2Fcontent%2Fdark_image_file%2Fdark_image%2F1321861%2FSalesforce-441402ae4dbbcce939a944c6f7c11b70.svg',
        },
        {
          logo: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2Fcontent%2Fdark_image_file%2Fdark_image%2F1321861%2FSalesforce-441402ae4dbbcce939a944c6f7c11b70.svg',
        },
      ],
    },
    {
      imageSrc:
        'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fpartnership_section%2Fpartnership%2Fcontent%2Fcover_image_file%2Fcover_image%2F1321807%2F0926-ImperativeOnDemandModel-waldek_1280X600-e1dfde5cf2230e39c24e1dc76aed8f29.png&width=768',
      title: 'Toptal Partnership',
      location: 'Call to Action: the On-Demand Business Model',
      logo: [
        {
          logo: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2Fcontent%2Fdark_image_file%2Fdark_image%2F1312732%2Fmicrosoft-5bbbf48ab6fa4e06ae80784b550a6b8c.svg',
        },
        {
          logo: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2Fcontent%2Fdark_image_file%2Fdark_image%2F1312732%2Fmicrosoft-5bbbf48ab6fa4e06ae80784b550a6b8c.svg',
        },
      ],
    },
  ];

  currentStep = 0;
  nextStep() {
    this.currentStep++;

    if(this.currentStep == 2){
      this.currentStep = 0;
    }
  }

  hireTalent = [
    {
      title: 'Meet Talent in Our Network',
      description: null,
      caption: null,
      ctaSection: {
        title: 'Discover 20,000+ More Talent',
        description: 'in the Toptal Network',
        cta: {
          label: 'Discover Toptal Talent',
          href: '/hire',
          gaCategory: null,
          gaEvent: null,
          gaLabel: null,
        },
      },
      verticals: [
        {
          title: 'Developers',
          customCtaHref: '/hire?interested_in=developers',
          talents: [
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313635/talent_tabs_section-487b163dc8e24180d3e9b88895fbfcfd.jpg',
              fullName: 'Gabriel Courtemanche',
              jobTitle: 'JavaScript Developer',
              publicResumeUrl:
                'https://www.toptal.com/resume/gabriel-courtemanche',
              previousCompany: {
                name: 'Shopify',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1313604/shopify-73563827c10b6c595d1b61ea13500d08.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/git',
                  label: 'Git',
                },
                {
                  href: 'https://www.toptal.com/devops',
                  label: 'DevOps',
                },
                {
                  href: 'https://www.toptal.com/javascript',
                  label: 'JavaScript',
                },
                {
                  href: 'https://www.toptal.com/nodejs',
                  label: 'Node.js',
                },
              ],
              verifiedVertical: 'Engineering',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313636/justin_m-c9578280809b65cb349f26fac0b89dd6.jpg',
              fullName: 'Justin Michela',
              jobTitle: 'Java Developer',
              publicResumeUrl: 'https://www.toptal.com/resume/justin-michela',
              previousCompany: {
                name: 'Google',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1312633/google-99f6729cd64b27e035406b3e2e09b212.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/java',
                  label: 'Java',
                },
                {
                  href: 'https://www.toptal.com/sql',
                  label: 'SQL',
                },
                {
                  href: 'https://www.toptal.com/agile',
                  label: 'Agile',
                },
                {
                  href: 'https://www.toptal.com/python',
                  label: 'Python',
                },
              ],
              verifiedVertical: 'Engineering',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313637/frederique-58d8bfa059b6d433ef5a1421276e2ca2.jpg',
              fullName: 'Frédérique Mittelstaedt',
              jobTitle: 'Python Developer',
              publicResumeUrl:
                'https://www.toptal.com/resume/frederique-mittelstaedt',
              previousCompany: {
                name: 'ExxonMobil',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1314502/ExonMobil__262D3D-e6da8d08f3f207e6bff12a9f6b15e9eb.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/nodejs',
                  label: 'Node.js',
                },
                {
                  href: 'https://www.toptal.com/full-stack',
                  label: 'Full-stack',
                },
                {
                  href: 'https://www.toptal.com/python',
                  label: 'Python',
                },
                {
                  href: 'https://www.toptal.com/react',
                  label: 'React.js',
                },
              ],
              verifiedVertical: 'Engineering',
            },
          ],
          vertical: 'developers',
        },
        {
          title: 'Designers',
          customCtaHref: '/hire?interested_in=designers',
          talents: [
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313626/Osandi-beb14a4c5b5d350eeb62d77704a9dd63.jpg',
              fullName: 'Osandi Sekoú Robinson',
              jobTitle: 'Product Designer',
              publicResumeUrl:
                'https://www.toptal.com/designers/resume/osandi-sekou-robinson',
              previousCompany: {
                name: 'Apple',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1313609/apple-e7db01f4dbf24c76458cc4c90f54a28b.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/designers/product-design',
                  label: 'Product',
                },
                {
                  href: 'https://www.toptal.com/designers/ux',
                  label: 'UX',
                },
                {
                  href: 'https://www.toptal.com/designers/ux-research',
                  label: 'UX Research',
                },
                {
                  href: 'https://www.toptal.com/designers/ios',
                  label: 'iOS',
                },
              ],
              verifiedVertical: 'Design',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313627/adrien-d1d8c26478e4a8580a426e8de3e41aa6.jpg',
              fullName: 'Adrien Valesa',
              jobTitle: 'UX/UI Designer',
              publicResumeUrl:
                'https://www.toptal.com/designers/resume/adrien-valesa',
              previousCompany: {
                name: 'Lego',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1314506/Lego__262D3D-82adc3906fdb32081648c6535edbe3db.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/designers/app-ui-ux',
                  label: 'App UI/UX',
                },
                {
                  href: 'https://www.toptal.com/designers/design-systems',
                  label: 'Design Systems',
                },
                {
                  href: 'https://www.toptal.com/designers/mobile',
                  label: 'Mobile App',
                },
                {
                  href: 'https://www.toptal.com/designers/user-researchers',
                  label: 'User Research',
                },
              ],
              verifiedVertical: 'Design',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313628/jake_k-9a2016252f5e887b11b53080a29d9013.jpg',
              fullName: 'Jake Kahana',
              jobTitle: 'Visual Designer',
              publicResumeUrl:
                'https://www.toptal.com/designers/resume/jake-kahana',
              previousCompany: {
                name: 'Facebook Logo',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1315787/facebook__262D3D-a8bb9a0a55bf6efc811d1c97471d695a.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/designers/visual',
                  label: 'Visual',
                },
                {
                  href: 'https://www.toptal.com/designers/web-ux',
                  label: 'Web UX',
                },
                {
                  href: 'https://www.toptal.com/designers/photoshop',
                  label: 'Photoshop',
                },
                {
                  href: 'https://www.toptal.com/designers/digital-experience',
                  label: 'Digital Experience Design',
                },
              ],
              verifiedVertical: 'Design',
            },
          ],
          vertical: 'designers',
        },
        {
          title: 'Finance Experts',
          customCtaHref: '/hire?interested_in=finance_experts',
          talents: [
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313632/anuar-667273dc48426532f4f74848aaea1adf.jpg',
              fullName: 'Anuar Heberlein',
              jobTitle: 'M&A Expert',
              publicResumeUrl:
                'https://www.toptal.com/finance/resume/anuar-heberlein',
              previousCompany: {
                name: 'Bain & Company',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1313624/baincompany-bc78f58b3865fa608ba8f1e6fab13a93.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/finance/valuation',
                  label: 'Valuation',
                },
                {
                  href: 'https://www.toptal.com/finance/mergers-and-acquisitions',
                  label: 'M&A',
                },
                {
                  href: 'https://www.toptal.com/finance/financial-planning-and-analysis',
                  label: 'FP&A',
                },
                {
                  href: 'https://www.toptal.com/finance/financial-modeling',
                  label: 'Financial Modeling',
                },
              ],
              verifiedVertical: 'Finance',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313634/neil-ecc102f0c73d4039164f990ec604e667.jpg',
              fullName: 'Neil Portus | CFA, CMA',
              jobTitle: 'Interim CFO',
              publicResumeUrl:
                'https://www.toptal.com/finance/resume/neil-portus',
              previousCompany: {
                name: 'Goldman Sachs',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1312631/goldmansachs-3262e45ada4008487c16ab34cff7167c.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/finance/interim-cfos',
                  label: 'CFO',
                },
                {
                  href: 'https://www.toptal.com/finance/private-equity-consultants',
                  label: 'Private Equity',
                },
                {
                  href: 'https://www.toptal.com/finance/venture-capital-consultants',
                  label: 'Venture Capital',
                },
                {
                  href: 'https://www.toptal.com/finance/capital-markets',
                  label: 'Capital Markets',
                },
              ],
              verifiedVertical: 'Finance',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313633/francesco-e81b8178578f35965b82c16d3e1232af.jpg',
              fullName: 'Francesco Castellano',
              jobTitle: 'Market Researcher',
              publicResumeUrl:
                'https://www.toptal.com/finance/resume/francesco-castellano',
              previousCompany: {
                name: 'Bain & Company',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1313624/baincompany-bc78f58b3865fa608ba8f1e6fab13a93.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/finance/market-research-analysts',
                  label: 'Market Research',
                },
                {
                  href: 'https://www.toptal.com/finance/financial-planning-and-analysis',
                  label: 'FP&A',
                },
                {
                  href: 'https://www.toptal.com/finance/fundraising',
                  label: 'Fundraising',
                },
                {
                  href: 'https://www.toptal.com/finance/financial-modeling',
                  label: 'Financial Modeling',
                },
              ],
              verifiedVertical: 'Finance',
            },
          ],
          vertical: 'finance_experts',
        },
        {
          title: 'Project Managers',
          customCtaHref: '/hire?interested_in=project_managers',
          talents: [
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313639/marco-1abbdc6a80905c1af9cd320fd43bd7b8.jpg',
              fullName: 'Marco De Stefano',
              jobTitle: 'Agile Project Manager',
              publicResumeUrl:
                'https://www.toptal.com/project-managers/resume/marco-de-stefano',
              previousCompany: {
                name: 'Amazon',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1312400/amazon-2cec2ed3bc7f1fe21076cfadee1f189e.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/project-managers/agile',
                  label: 'Agile',
                },
                {
                  href: 'https://www.toptal.com/project-managers/scrum-master',
                  label: 'Scrum',
                },
                {
                  href: 'https://www.toptal.com/project-managers/waterfall',
                  label: 'Waterfall',
                },
                {
                  href: 'https://www.toptal.com/project-managers/kanban',
                  label: 'Kanban',
                },
              ],
              verifiedVertical: 'Project Management',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313638/meko-01185fa434ff86cab7b95023e8778e01.jpg',
              fullName: 'Meko Kofahl',
              jobTitle: 'Mobile Project Manager',
              publicResumeUrl:
                'https://www.toptal.com/project-managers/resume/meko-kofahl',
              previousCompany: {
                name: 'Vodafone',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1313614/vodafone-77046d76f31941b288b5f199a9d997bf.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/project-managers/mobile',
                  label: 'Mobile',
                },
                {
                  href: 'https://www.toptal.com/project-managers/agile-coaching',
                  label: 'Agile Coaching',
                },
                {
                  href: 'https://www.toptal.com/project-managers/project-management-consultant',
                  label: 'Project Management Consulting',
                },
                {
                  href: 'https://www.toptal.com/project-managers/pmo',
                  label: 'PMO',
                },
              ],
              verifiedVertical: 'Project Management',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313640/geeta-f7bca6f6e6854a7cdf278ebe8a9f5f66.jpg',
              fullName: 'Geeta Acharya',
              jobTitle: 'IT Project Manager',
              publicResumeUrl:
                'https://www.toptal.com/project-managers/resume/geeta-acharya',
              previousCompany: {
                name: 'Morgan Stanley',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1312738/morganstanley-09cfa4f33e835857d7e0dbc7ccb8c9dc.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/project-managers/it',
                  label: 'IT',
                },
                {
                  href: 'https://www.toptal.com/project-managers/program-manager',
                  label: 'Program Management',
                },
                {
                  href: 'https://www.toptal.com/project-managers/technical',
                  label: 'Technical Project Management',
                },
                {
                  href: 'https://www.toptal.com/project-managers/agile',
                  label: 'Agile',
                },
              ],
              verifiedVertical: 'Project Management',
            },
          ],
          vertical: 'project_managers',
        },
        {
          title: 'Product Managers',
          customCtaHref: '/hire?interested_in=product_managers',
          talents: [
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313629/adan-9a1e29f27ff4ef3681df10ff54ab4371.jpg',
              fullName: 'Adan Perez',
              jobTitle: 'Product Owner',
              publicResumeUrl:
                'https://www.toptal.com/product-managers/resume/adan-e-perez',
              previousCompany: {
                name: 'AT&T',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1313619/att-da2ba136c917fb5cd1a51ee5e146c664.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/product-managers/product-owner',
                  label: 'Product Owner',
                },
                {
                  href: 'https://www.toptal.com/product-managers/scrum',
                  label: 'Scrum',
                },
                {
                  href: 'https://www.toptal.com/product-managers/jira',
                  label: 'JIRA',
                },
                {
                  href: 'https://www.toptal.com/product-managers/product-coach',
                  label: 'Product Coaching',
                },
              ],
              verifiedVertical: 'Product Management',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313630/greg-d8b6efe038a2e3bcb3bd419c135f65bd.jpg',
              fullName: 'Greg Prickril',
              jobTitle: 'Interim CPO',
              publicResumeUrl:
                'https://www.toptal.com/product-managers/resume/greg-prickril',
              previousCompany: {
                name: 'Microsoft',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1312732/microsoft-5bbbf48ab6fa4e06ae80784b550a6b8c.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/product-managers/interim-cpo-a',
                  label: 'Interim Chief Product Officer',
                },
                {
                  href: 'https://www.toptal.com/product-managers/lean',
                  label: 'Lean Product Management',
                },
                {
                  href: 'https://www.toptal.com/product-managers/product-owner',
                  label: 'Product Owner',
                },
                {
                  href: 'https://www.toptal.com/product-managers/saas',
                  label: 'SaaS Product Management',
                },
              ],
              verifiedVertical: 'Product Management',
            },
            {
              talent: {
                __typename: 'ComponentsTalent',
              },
              avatar:
                'https://bs-uploads.toptal.io/blackfish-uploads/components/home_page/talent_network_section/vertical/talent/content/avatar_file/avatar/1313631/casey-222213bbf5fe28c6ba3dddfd51d08994.jpg',
              fullName: 'Casey Arrington',
              jobTitle: 'Product Manager',
              publicResumeUrl:
                'https://www.toptal.com/product-managers/resume/casey-arrington',
              previousCompany: {
                name: 'SpaceX',
                imageUrl:
                  'https://bs-uploads.toptal.io/blackfish-uploads/components/company_logo/content/dark_image_file/dark_image/1314510/SpaceX__262D3D-e70c0594ae2c647d090f47a447067b4c.svg',
              },
              expertise: [
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
                {
                  vertical: {
                    __typename: 'Vertical',
                  },
                },
              ],
              skills: [
                {
                  href: 'https://www.toptal.com/product-managers/product-management',
                  label: 'Product Management',
                },
                {
                  href: 'https://www.toptal.com/product-managers/robotics',
                  label: 'Robotics Product Management',
                },
                {
                  href: 'https://www.toptal.com/product-managers/product-owner',
                  label: 'Product Owner',
                },
                {
                  href: 'https://www.toptal.com/product-managers/jira',
                  label: 'JIRA',
                },
              ],
              verifiedVertical: 'Product Management',
            },
          ],
          vertical: 'product_managers',
        },
      ],
    },
  ];

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
