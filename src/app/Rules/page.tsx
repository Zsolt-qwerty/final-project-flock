import styles from "./Rules.module.css";

export default function CommunityRules(){

    return (
        <div>
          <h1 className={styles.header}>Flock community rules</h1>
          <p>Welcome to the Flock! We&apos;re so glad you&apos;re here. lock is all about connecting with others.</p>
          <p> Flock is all about connecting with others. To keep our community safe and welcoming for everyone, please follow these simple rules:</p>
          <ol>
            <li>Be kind and respectful: everyone here is a real person with feelings.</li>
            <li>Keep it clean and safe: no hate speech, bullying or discrimination of any kind.</li>
            <li>Share your thoughts responsibly: please don&apos;t post anything illegal or harmful. Avoid sharing information you wouldn&apos;t want everyone to know</li>
            <li>Adults only: remember Flock is a community for 18 years +. Please keep this in mind when posting and interacting with others.</li>
          </ol>
          <div>
            <h2>Help us to keep Flock awesome</h2>
            <p> If you see something that goes against these guidelines, please let us know so we can keep Flock a safe and positive space for everyone.
            We want to keep rules to a minimum, but we may step in to keep things friendly.</p>
            <p>Others may find it difficult striking up a conversation. We hope that we can help some of you to find your flock in a safe and easy way.</p>
          </div>
          <div>
            <h2>That&apos;s all!</h2>
            <p>Most importantly: relax, be yourself, and have fun connecting with your flock</p>
          </div>
        </div>
    );
}
