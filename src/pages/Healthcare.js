import React from "react";
import { Link } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import Seo from "../components/Seo";
import "../styles/pages/_healthcare.scss";

const calendar = "https://calendar.app.google/bFLTeYF3WSSZXEET8";

function Actions() {
    return <div className="healthcare-actions">
        <a className="healthcare-book" href={calendar}>Book 15 minutes <span aria-hidden="true">↗</span></a>
        <a href="mailto:hi@jordandavila.com">hi@jordandavila.com</a>
    </div>;
}

export default function Healthcare() {
    return (
        <main className="healthcare" id="healthcare-top">
            <Seo title="Website privacy and accessibility fixes for medical groups" description="Jordan Davila fixes privacy and accessibility problems on medical groups' websites. Start with a free check of the finding in your email." />
            <nav className="healthcare-nav" aria-label="Portfolio">
                <Link to="/" aria-label="Jordan Davila, home" className="healthcare-home"><span aria-hidden="true">•••</span></Link>
                <Link to="/" className="healthcare-name">Jordan Davila</Link>
                <a href="#healthcare-pricing">Pricing</a>
            </nav>
            <ContentContainer>
                <header className="healthcare-hero">
                    <h1>Website privacy and accessibility fixes for medical groups</h1>
                    <div className="healthcare-intro">
                        <p>I’m Jordan Davila. I build and audit websites. I fix privacy and accessibility problems on medical groups’ websites.</p>
                        <p className="healthcare-proof">I build websites for Diageo's brands, under its accessibility and claims-review rules.</p>
                        <Actions />
                    </div>
                </header>
                <section className="healthcare-evidence" aria-labelledby="evidence-title">
                    <h2 id="evidence-title">Start with the evidence.<br />The first check is free.</h2>
                    <p>If you came from my email, I’ll check that finding with you. You get screenshots and the captured requests so you can see what the website sends.</p>
                </section>
                <section className="healthcare-section" aria-labelledby="checks-title">
                    <h2 id="checks-title">What I check</h2>
                    <div>
                        <ul className="healthcare-checks">
                            <li><h3>Page addresses sent to ad platforms</h3><p>Booking pages and condition pages whose address is sent to Google Ads, Meta or Microsoft Ads.</p></li>
                            <li><h3>Session recorders on sensitive pages</h3><p>Hotjar, Microsoft Clarity and FullStory.</p></li>
                            <li><h3>Tracking before consent</h3><p>Tracking that starts before the cookie banner choice.</p></li>
                            <li><h3>Booking forms people can use</h3><p>Forms that screen readers can’t use. WCAG 2.1 AA is the standard.</p></li>
                        </ul>
                        <p className="healthcare-note">HHS moved its web accessibility deadline to May 11, 2027 for practices with 15 or more employees that take Medicaid or other HHS funds.</p>
                    </div>
                </section>
                <section className="healthcare-section" aria-labelledby="process-title">
                    <div><h2 id="process-title">From finding<br />to fix</h2><p className="healthcare-process-note">Ad tracking keeps working without health data.</p></div>
                    <ol className="healthcare-steps">
                        <li><h3>A free evidence check</h3><p>The finding in the email, with screenshots and captured requests.</p></li>
                        <li><h3>An audit</h3><p>A whole-site check and a fix list.</p></li>
                        <li><h3>The fix</h3><p>Tracking, accessibility or a rebuild, based on the audit.</p></li>
                        <li><h3>A rescan and written record</h3><p>A record for your practice’s compliance file.</p></li>
                        <li><h3>Monitoring, if you want it</h3><p>A monthly rescan, report and small fixes when a problem comes back.</p></li>
                    </ol>
                </section>
                <section className="healthcare-section healthcare-pricing" id="healthcare-pricing" aria-labelledby="pricing-title">
                    <h2 id="pricing-title">Pricing</h2>
                    <div>
                        <p className="healthcare-price-lead">Flat fees, agreed before any work starts.</p>
                        <ul className="healthcare-checks">
                            <li><h3>The first check is free</h3><p>The finding in my email, with screenshots and the captured requests.</p></li>
                            <li><h3>Quoted for your site</h3><p>Audits and fixes are quoted after that check.</p></li>
                            <li><h3>Payment</h3><p>Half up front and half on delivery.</p></li>
                            <li><h3>Not included</h3><p>Legal advice, BAA tool subscriptions (the practice pays the vendor), PDF forms (quoted per document), changes inside third-party booking tools, and new copywriting or photos.</p></li>
                        </ul>
                    </div>
                </section>
                <footer className="healthcare-footer">
                    <h2>Let’s look at<br />the finding.</h2>
                    <div><p>Start with a free check of the finding in your email.</p><Actions /><p className="healthcare-disclaimer">This service isn’t legal advice.</p></div>
                </footer>
            </ContentContainer>
        </main>
    );
}
