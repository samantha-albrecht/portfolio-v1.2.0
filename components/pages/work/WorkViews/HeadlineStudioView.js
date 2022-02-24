import PageWrapper from '@components/foundation/PageWrapper'
import MainGrid from '@components/foundation/MainGrid'
import styles from './WorkViews.module.scss'
import cn from 'classnames'
import Typography from '@components/foundation/Typography'
import Aside from '../Aside'
import ProjectDetails from '../ProjectDetails'

function HeadlineStudioView() {
  return (
    <PageWrapper>
      <MainGrid>
        <div className={styles.innerWrapper}>
          <div className={styles.asideWrapper}>
            <Aside />
          </div>
          <div className={styles.headingWrapper}>
            <Typography variant="caption">
              Headline Studio by CoSchedule
            </Typography>
            <Typography variant="h1" size="xxl" weight="h-bold">
              New Product Signup Page
            </Typography>
          </div>
          <div className={styles.bodyWrapper}>
            <img
              className={cn(styles.imageContainer, styles.imageMain)}
              src="/images/work/hs/project-screenshots-hs-main-view.png"
              alt="Headline Studio by CoSchedule"
              width={810}
              height={455}
            />
            <div id="problem" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Problem
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              CoSchedule Headline Analyzer was launched in 2018 and quickly
              became the #1 Free Headline Analyzer tool. Two years later the
              analyzer had become slow and&nbsp;outdated.
            </p>
            <p className={styles.projectBodyParagraph}>
              To bring users the best experience possible it was time to turn
              Headline Analyzer into a higher performing web application with
              all new premium features. So, Headline Studio was&nbsp;born.
            </p>
            <p className={styles.projectBodyParagraph}>
              A new app means a new product page and sign up. I was responsible
              for creating the new, conversion focused signup page for
              Headline&nbsp;Studio.
            </p>

            <div id="challenges" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Challenges
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              There were various content challenges from differentiating
              Headline Studio, the new app, from Headline Analyzer, the old
              webpage, calling out features that had been upgraded and including
              new premium features, and deciding whether of not to
              include&nbsp;pricing.
            </p>
            <p className={styles.projectBodyParagraph}>
              The main challenge, however, was to eliminate all friction that
              prevents visitors from signing up. We want this page to be a
              converting&nbsp;machine!
            </p>

            <div id="process" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Process
              </Typography>
            </div>
            <div id="process" className={styles.projectBodySubTitleLg}>
              <Typography variant="h3" size="l">
                Research
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              Since the goal of this page was to convert rather than inform, I
              started by researching high converting squeeze pages. These
              pages&nbsp;included:
            </p>
            <ul className={styles.projectBodyList}>
              <li>A clear call-to-action</li>
              <li>Minimal distractions (ex. no navigation)</li>
              <li>Simple form</li>
              <li>Social proof to build trust</li>
              <li>FAQ</li>
              <li>Exit offer</li>
            </ul>

            <div id="process" className={styles.projectBodySubTitleLg}>
              <Typography variant="h3" size="l">
                Wireframes
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              With these attributes in mind I started creating wireframes. In
              this state I got a feel for how the content was going to be laid
              out, set up a visual hierarchy, and decided where to incorporate
              visual&nbsp;elements.
            </p>
            <p className={styles.projectBodyParagraph}>
              Additionally, I explored variations of two key elements: sign up
              and&nbsp;pricing.
            </p>

            <div id="process" className={styles.projectBodySubTitleMd}>
              <Typography variant="h4" size="m" weight="h-bold">
                Sign up
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              I created page layouts with no form, a static form, and a
              sticky&nbsp;form.
            </p>
            <p className={styles.projectBodyParagraph}>
              <span className={styles.strong}>No form &#8211;</span> From
              previous tests we knew that reducing the number of clicks to sign
              up increases conversion rates. Therefore, the no form version was
              out. The form had to be on the&nbsp;page.
            </p>
            <p className={styles.projectBodyParagraph}>
              <span className={styles.strong}>Static form &#8211;</span>{' '}
              Webpages are like billboards, you only have a few seconds to get
              your message across. Some visitors may scroll and skim the
              headings, but the vast majority will leave if the call to action
              is&nbsp;unclear.
            </p>
            <p className={styles.projectBodyParagraph}>
              In order to make the sign up form immediately visible it was
              placed "above&nbsp;the&nbsp;fold."
            </p>
            <img
              className={styles.imageContainer}
              src="/images/work/hs/project-screenshots-hs-static-form.png"
              alt="Static sign up form wireframe."
              width={810}
              height={903}
              loading="lazy"
            />
            <p className={styles.projectBodyParagraph}>
              <span className={styles.strong}>Sticky form &#8211;</span> Now
              that we have the form on the page, I took it one step further.
              Because there is a lot of content on the page it's very long.
              Instead of making the visitor find the form at the top of the
              page, the layout accommodated space for the form to follow them
              down the&nbsp;page.
            </p>
            <p className={styles.projectBodyParagraph}>
              <span className={styles.italic}>
                Mobile note: the form requires a click to open on mobile,
                however we know the majority of our users are on desktop. This
                was not a big&nbsp;concern.
              </span>
            </p>
            <img
              className={styles.imageContainer}
              src="/images/work/hs/project-screenshots-hs-sticky-form.png"
              alt="Sticky sign up form wireframe."
              width={810}
              height={768}
              loading="lazy"
            />

            <div id="process" className={styles.projectBodySubTitleMd}>
              <Typography variant="h4" size="m" weight="h-bold">
                Pricing
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              The pricing section has a big job - to make the user feel informed
              enough to make a purchasing decision. It has to communicate
              complex information in an easy-to-understand&nbsp;way.
            </p>
            <p className={styles.projectBodyParagraph}>
              We went through a dozen versions of pricing with
              conversations&nbsp;around:
            </p>
            <ul className={styles.projectBodyList}>
              <li>How much information is too much&nbsp;information?</li>
              <li>
                Do we keep it simple with basic details or include a full
                comparison&nbsp;chart?
              </li>
              <li>Do we include the free plan or only the paid&nbsp;plans?</li>
              <li>
                How do we show the savings between monthly and
                annual&nbsp;pricing?
              </li>
            </ul>
            <p className={styles.projectBodyParagraph}>
              In the end, the pricing section was designed to focus on the paid
              plans, highlighting the premium features Headline Studio Pro
              includes. A toggle was used to compare monthly and annual prices.
              And it was important to include the free plan for visitors who
              were not ready to purchase, therefore, a small callout was added
              under the paid&nbsp;plans.
            </p>
            <img
              className={styles.imageContainer}
              src="/images/work/hs/project-screenshots-hs-pricing.png"
              alt="Pricing wireframe."
              width={810}
              height={599}
              loading="lazy"
            />

            <div id="process" className={styles.projectBodySubTitleLg}>
              <Typography variant="h3" size="l">
                Design
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              Once we were feeling good about the layout, I moved on to design.
              Not only did this include the page design, but also all the page
              graphics and&nbsp;icons.
            </p>
            <p className={styles.projectBodyParagraph}>
              The Headline Studio brand uses unique colors and icon styles that
              differentiate it from the main CoSchedule bran. To unify the
              brands the same font family is&nbsp;use.
            </p>
            <p className={styles.projectBodyParagraph}>
              Since This was the first page for Headline Studio I had the
              freedom to choose the colors and incorporate new design elements
              to make it feel&nbsp;fresh.
            </p>
            <img
              className={cn(styles.imageContainer, styles.imageSmall)}
              src="/images/work/hs/project-screenshots-hs-graphic.png"
              alt="Custom product graphics for Headline Studio."
              width={405}
              height={405}
              loading="lazy"
            />

            <div id="process" className={styles.projectBodySubTitleLg}>
              <Typography variant="h3" size="l">
                Build
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              Now it was time to bring the page to life. I built the main page
              using HTML, CSS (LESS), and jQuery. Getting the sign up form
              connected to our accounts system required help from
              our&nbsp;engineers.
            </p>
            <p className={styles.projectBodyParagraph}>
              Throughout the project I discussed ideas and received feedback
              from product owners and stakeholders during
              twice-weekly&nbsp;demos.
            </p>

            <div id="outcomes" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Outcomes
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              After launch user behavior was watched in Hotjar and conversion
              rates were measured in&nbsp;Kissmetrics.
            </p>
            <p className={styles.projectBodyParagraph}>
              We immediate saw the pricing button in the navigation was getting
              the most clicks. Of course people want to know the price. In order
              to see how pricing was affecting our conversions we ran and
              A/B&nbsp;test.
            </p>
            <p className={styles.projectBodyParagraph}>
              The answer was clear, the no pricing version converted
              significantly higher. Although we spent a lot of time on the
              pricing section it had to go. In this stage of the user journey
              pricing was not necessary. It was a distraction. We didn't want
              visitors to get hung up on the price, they needed to experience
              the value. And if they choose not to purchase, they can still use
              the tool for&nbsp;free!
            </p>
            <p className={styles.projectBodyParagraph}>
              With cross-team collaboration, research, and refinement the
              Headline Studio sign up page is a consistently high
              converting&nbsp;page.
            </p>

            <div className={styles.detailsWrapper}>
              <ProjectDetails currentPage="hs" />
            </div>
          </div>
        </div>
      </MainGrid>
    </PageWrapper>
  )
}

export default HeadlineStudioView
