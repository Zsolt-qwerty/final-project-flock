import styles from "./AboutUs.module.css";
import Image from "next/image";
// This component serves as the About us for the route (/about-us).

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <section className={styles.textSection}>
        <h1 className={styles.header}>find your Flock...</h1>
        <p>The idea for Flock was inspired by the fact that millions of people in the UK are significantly affected by loneliness.</p>
        <p>Many organisations are already doing amazing work to help address this complex issue.</p>
        <p>We know we can&apos;t solve it with this community. But we wanted to create a space that:</p>
        <ul>
          <li>connects you to others through shared interests</li>
          <li>is safe and welcoming</li>
          <li>guides you in starting conversations with others, and</li>
          <li>supports you to attend events and meet-ups in the real world (if that&apos;s what you want to do)</li>
        </ul>
        <div>
          <h2>It&apos;s difficult to reach out</h2>
          <p>There are numerous reasons why people feel isolated and lonely. Some of us feel happy to chat but maybe haven&apos;t found the right place to meet.</p>
          <p>Others may find it difficult striking up a conversation. We hope that we can help some of you to find your flock in a safe and easy way.</p>
        </div>
        <div>
          <h2>Our team</h2>
          <p>Six coding bootcampers came together with a single mission to use tech for good. We felt passionate about using our skills to develop a service that could help a real-world problem.</p>
          <p>Find out more about us below:</p>
          <ul>
            <li>Oliver Hopwood</li>
            <li>Sarah Hunt</li>
            <li>Christopher O&apos;Conner</li>
            <li>Zsolt Peter</li>
            <li>Hope Pichur</li>
            <li>Caitlin Young</li>
          </ul>
        </div>
        <div>
          <h2>Have any feedback for us?</h2>
          <p>Get in contact with us: hello@flock.co.uk</p>
        </div>
      </section>
      <section className={styles.imageSection}>
        <Image src="/interim-image.png" alt="Interim" width={2240} height={800} />
        <blockquote className={styles.pullQuote}>
          &quot;Connecting people through shared interests.&quot;
        </blockquote>
      </section>
    </div>
  );
}