import PageWrapper from '@components/foundation/PageWrapper'
import MainGrid from '@components/foundation/MainGrid'
import styles from './WorkViews.module.scss'
import cn from 'classnames'
import Typography from '@components/foundation/Typography'
import Aside from '../Aside'
import ProjectDetails from '../ProjectDetails'

function ActionableMarketingInstituteView() {
  return (
    <PageWrapper>
      <MainGrid>
        <div className={styles.innerWrapper}>
          <div className={styles.asideWrapper}>
            <Aside />
          </div>
          <div className={styles.headingWrapper}>
            <Typography variant="caption">
              Actionable Marketing Institute powered by CoSchedule
            </Typography>
            <Typography variant="h1" size="xxl" weight="h-bold">
              Online Marketing Course Pages
            </Typography>
          </div>
          <div className={styles.bodyWrapper}>
            <img
              className={cn(styles.imageContainer, styles.imageMain)}
              src="/images/work/ami/project-screenshots-ami-main-view.png"
              alt="Actionable Marketing Institute powered by CoSchedule"
              width={810}
              height={455}
            />
            <div id="problem" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Problem
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              The CoSchedule marketing team had been building a library of
              marketing courses on Teachable* over the past three years. The
              courses are perfect for marketers looking for no-fluff training,
              however the courses were highly under&nbsp;utilized.
            </p>
            <p className={styles.projectBodyParagraph}>
              The constraints of the Teachable platform created a poor user
              experience for prospective students. It was hard to view the full
              course list and understand the value of the Actionable Marketing
              Institute (formerly CoSchedule Academy). We wanted prospective
              students to be able to find exactly what they wanted to learn,
              when they wanted to learn&nbsp;it.
            </p>
            <p className={styles.projectBodyParagraph}>
              In order to make the Actionable Marketing Institute (AMI) more
              user-friendly and position it as the best value we built a new AMI
              homepage and individual course&nbsp;pages.
            </p>
            <p className={cn(styles.projectBodyParagraph, styles.italic)}>
              *Teachable is an all-in-one platform that helps you create and
              sell course&nbsp;online.
            </p>

            <div id="challenges" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Challenges
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              The main hurdle to overcome was the Teachable platform. Teachable
              is built for people who want to get up and running quickly selling
              online courses. It's great for managing courses, users, and
              creating basic sales pages with no coding
              experiences&nbsp;necessary.
            </p>
            <p className={styles.projectBodyParagraph}>
              We had to figure out how to incorporate the features and
              functionality we wanted using Teachable. Or find a
              better&nbsp;solution.
            </p>
            <p className={styles.projectBodyParagraph}>
              Another challenging requirement was giving the marketing team full
              control to add new course pages and make updates to the page
              content on the&nbsp;fly.
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
              The first step was to figure out the challenge presented by
              Teachable. I had never used Teachable before so I started by
              familiarizing myself with the out-of-the-box functionality and
              documentation. How did the page builder work? What page elements
              and layout options were available? Could I
              customize&nbsp;anything?
            </p>
            <p className={styles.projectBodyParagraph}>
              I also looked at other Teachable pages: What did they look like?
              Did they have similar features to what we&nbsp;wanted?{' '}
            </p>
            <p className={styles.projectBodyParagraph}>
              I found the page builder was extremely limiting. I could include
              custom code snippets, but I would have to build them outside of
              Teachable and then drop them in as one{' '}
              <span className={styles.italic}>long</span> line of code, inline
              styles and all. What a nightmare to troubleshoot! And most course
              pages looked the same, not what we were going&nbsp;for.
            </p>
            <p className={styles.projectBodyParagraph}>
              Knowing that we’d have to hand-code the elements to incorporate
              the features we wanted, we wanted a better solution than custom
              code snippets. Do we have to use Teachable? Could we build our
              own&nbsp;pages?
            </p>
            <p className={styles.projectBodyParagraph}>
              After discussions with the team, we decided not to use Teachable
              pages but to build our own Wordpress templates and manage all the
              page content in Wordpress. This allowed us to think big and add
              all the features and functionality we wanted to convert
              prospective students. It also gave the marketing team full control
              to create new pages and change the content as needed for
              promotions or other marketing&nbsp;initiatives.
            </p>
            <p className={styles.projectBodyParagraph}>
              Whew! Now that we have that figured out, let’s move on to the
              fun&nbsp;stuff!
            </p>
            <p className={styles.projectBodyParagraph}>
              To be clear there are two parts to this project: (1) the AMI
              homepage and (2) the AMI course&nbsp;pages.
            </p>
            <p className={styles.projectBodyParagraph}>
              For the homepage, I researched current online learning websites
              like Skillshare, Udemy, Coursera, Pluralsight, and Codecademy. I
              noted the various ways they listed their courses and the
              information included for each course&nbsp;card.
            </p>
            <p className={styles.projectBodyParagraph}>
              For the course pages I looked at the same websites, but was
              interested in the individual course&nbsp;details.
            </p>
            <div id="process" className={styles.projectBodySubTitleLg}>
              <Typography variant="h3" size="l">
                Wireframes
              </Typography>
            </div>
            <div id="process" className={styles.projectBodySubTitleMd}>
              <Typography variant="h4" size="m" weight="h-bold">
                Course Pages
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              There are a few key areas I focused on while wireframing: the hero
              section, the lessons, and the plan&nbsp;comparison
            </p>
            <p className={styles.projectBodyParagraph}>
              <span className={styles.strong}>Hero &#8211;</span> To give
              prospective students a quick course snapshot I included a few
              course details including course level, course category, est. time
              to complete, number of lessons, and number of&nbsp;resources.
            </p>
            <img
              className={styles.imageContainer}
              src="/images/work/ami/project-screenshots-ami-course-details.png"
              alt="AMI Course details wireframe."
              width={1080}
              height={550}
              loading="lazy"
            />
            <p className={styles.projectBodyParagraph}>
              <span className={styles.strong}>Lessons &#8211;</span> I played
              around with various lesson layouts including a condensed list with
              a video preview compared to an expanded list with a short
              description for each&nbsp;lesson.
            </p>
            <img
              className={styles.imageContainer}
              src="/images/work/ami/project-screenshots-ami-lessons-1.png"
              alt="AMI Course lessons wireframe."
              layout="responsive"
              width={810}
              height={424}
              loading="lazy"
            />
            <p className={styles.projectBodyParagraph}>
              <span className={styles.strong}>Plan comparison &#8211;</span> We
              wanted to emphasize the value of purchasing AMI Pro which includes
              all courses vs purchasing a single course. I chose a two column
              layout to compare plans side by&nbsp;side.
            </p>
            <img
              className={styles.imageContainer}
              src="/images/work/ami/project-screenshots-ami-plan-comparison.png"
              alt="Sticky sign up form wireframe."
              width={810}
              height={604}
              loading="lazy"
            />
            <div id="process" className={styles.projectBodySubTitleMd}>
              <Typography variant="h4" size="m" weight="h-bold">
                Homepage
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              Originally we were going to build a course catalog and a homepage.
              Through the wireframing process it became clear how similar the
              pages were. Combining the pages streamlined the user experience.
              No switching between pages, now all the information would be on
              one page. The course catalog became the main feature on
              the&nbsp;homepage.
            </p>
            <p className={styles.projectBodyParagraph}>
              <span className={styles.strong}>Course catalog &#8211;</span>{' '}
              First I explored how to display the course cards, comparing the
              pros and cons of showing all courses like a library or condensing
              them into a carousel. The carousel allows users to look through
              the courses without completely taking over the&nbsp;page.
            </p>
            <img
              className={styles.imageContainer}
              className={styles.imageContainer}
              src="/images/work/ami/project-screenshots-ami-course-categories.png"
              alt="AMI Pro course categories wireframe."
              width={810}
              height={731}
              loading="lazy"
            />
            <p className={styles.projectBodyParagraph}>
              If a user is looking for a specific type of course, I included the
              ability to filter the courses by selecting a&nbsp;category.
            </p>
            <img
              className={styles.imageContainer}
              src="/images/work/ami/project-screenshots-ami-course-carousel-1.png"
              alt="AMI Pro course carousel wireframe."
              width={810}
              height={521}
              loading="lazy"
            />
            <p className={styles.projectBodyParagraph}>
              I also tried various card layouts, taking into consideration what
              was the most valuable information to include. For example, one
              variation included the course instructor&#8212;although our
              instructors are marketing wizards, they are probably not well
              known. Including their names is not as valuable as other course
              details. Ultimately, each course card includes the title,
              description, number of lessons, estimated time to completion, and
              certification if&nbsp;applicable.
            </p>

            <div id="process" className={styles.projectBodySubTitleLg}>
              <Typography variant="h3" size="l">
                Design
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              As I mentioned earlier, Actionable Marketing Institute was
              formerly CoSchedule Academy. Along with a new name AMI got a new
              brand crafted by our Senior Graphic Designer, who created all the
              graphics for these&nbsp;pages.
            </p>
            <p className={styles.projectBodyParagraph}>
              The AMI brand is fun, trendy, and eye-catching with bright colors
              and unique iconography for each course. The goal of the design was
              to complement the new brand, allowing the incredible illustrations
              to stand&nbsp;out.
            </p>
            <img
              className={styles.imageContainer}
              src="/images/work/ami/project-screenshots-ami-graphics.png"
              alt="Custom illustrations for Actionable Marketing Institute Courses."
              width={810}
              height={409}
              loading="lazy"
            />

            <div id="process" className={styles.projectBodySubTitleLg}>
              <Typography variant="h3" size="l">
                Build
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              An important requirement of this project was to give the marketing
              team complete control over the page content to update as needed,
              and allow them to add new course pages as new courses are
              released. This meant that everything needed to be editable from
              the copy to the&nbsp;color.
            </p>
            <p className={styles.projectBodyParagraph}>
              The pages were built as templates and use Advanced Custom Fields
              and PHP to dynamically add content and&nbsp;color.
            </p>
            <p className={styles.projectBodyParagraph}>
              Behind the scenes functionality:
            </p>
            <ul className={styles.projectBodyList}>
              <li>
                Flexible layouts to accommodate for more or less content on
                each&nbsp;page.
              </li>
              <li>Customizable colors to make each page&nbsp;unique.</li>
              <li>
                Optional elements. The hello bar and exit offer can be shown or
                hidden at any&nbsp;time.
              </li>
              <li>
                Promo callouts. There are fun arrows and additional copy that
                can be added when running a&nbsp;promotion.
              </li>
              <li>
                Course carousel. Fully responsive, filterable, and adapts as new
                courses are added to the&nbsp;list.
              </li>
            </ul>
            <img
              className={styles.imageContainer}
              src="/images/work/ami/project-screenshots-ami-course-carousel-2.png"
              alt="AMI Pro course carousel."
              width={810}
              height={460}
              loading="lazy"
            />

            <div id="outcomes" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Outcomes
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              Since launching the new website pages the marketing team has been
              able to amp up promotion of the Actionable Marketing Institute.
              We’ve seen significantly higher conversion rates and
              consistent&nbsp;growth.
            </p>

            <div className={styles.detailsWrapper}>
              <ProjectDetails currentPage="ami" />
            </div>
          </div>
        </div>
      </MainGrid>
    </PageWrapper>
  )
}

export default ActionableMarketingInstituteView
