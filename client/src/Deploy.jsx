const PATHS = [
  {
    id: 'path-share',
    letter: 'A',
    accent: '#047857',
    title: 'Share the Canvas Link',
    subtitle: "Send Canvas's built-in share URL — no download, no hosting.",
    badges: ['10 seconds', 'Canvas share URL', 'No code extraction'],
    speed: '10 sec',
    whoSeesIt: 'Google + anyone with link',
    bestFor: 'Demos, non-sensitive data',
    needsFile: false,
  },
  {
    id: 'path-email',
    letter: 'B',
    accent: '#0891B2',
    title: 'Email the HTML File',
    subtitle: 'Attach the file. Recipient downloads and double-clicks.',
    badges: ['~1 minute', 'No account', 'Works in any browser'],
    speed: '~1 min',
    whoSeesIt: 'Just the recipient',
    bestFor: 'One-to-one, any data',
    needsFile: true,
  },
  {
    id: 'path-local',
    letter: 'C',
    accent: '#D97706',
    title: 'Run Locally',
    subtitle: 'Open the file on your own machine. No sharing involved.',
    badges: ['Instant', 'No account', 'Private to you'],
    speed: 'Instant',
    whoSeesIt: 'Just you',
    bestFor: 'Testing, any data',
    needsFile: true,
  },
  {
    id: 'path-netlify',
    letter: 'D',
    accent: '#BA0C2F',
    title: 'Netlify Drop',
    subtitle: 'Drag a folder onto a webpage and get a live URL.',
    badges: ['~30 seconds', 'Account optional', 'Public URL'],
    speed: '~30 sec',
    whoSeesIt: 'Anyone with the URL',
    bestFor: 'Wider sharing, non-sensitive',
    needsFile: true,
  },
  {
    id: 'path-github',
    letter: 'E',
    accent: '#1E3A8A',
    title: 'GitHub Pages',
    subtitle: 'Permanent, free URL you can keep updating over time.',
    badges: ['~5 minutes', 'Free GitHub account', 'Permanent URL'],
    speed: '~5 min',
    whoSeesIt: 'Anyone with the URL',
    bestFor: 'Long-term, non-sensitive',
    needsFile: true,
  },
];

export default function Deploy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10 pb-6 border-b-[3px] border-slate-900">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#BA0C2F] mb-3">
          Quick Reference Guide
        </p>
        <h1 className="font-[BioRhyme,serif] text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
          Share Your <em className="text-[#BA0C2F] italic">Vibe-Coded</em> App
        </h1>
        <p className="text-slate-500 text-[1.05rem] max-w-[540px]">
          You built something in Gemini Canvas. Five ways to get it into
          someone else's hands — from a 10-second share link to a permanent
          URL you own. No coding experience required.
        </p>
      </div>

      {/* Pick Your Path — unified decision table with off-ramp above */}
      <Section title="Pick Your Path">
        <div className="bg-red-50 border border-red-200 rounded-md px-5 py-4 mb-5">
          <p className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#BA0C2F] mb-2">
            Handling client data or PII?
          </p>
          <p className="text-slate-800 text-[0.95rem] leading-relaxed">
            None of the options below are enough on their own. Stop here and
            loop in your IT or security team — they'll want HTTPS, access
            controls, and a data-handling review. This page assumes your tool
            handles <strong>non-sensitive data</strong>.
          </p>
        </div>

        <p className="mb-5 text-slate-800 leading-relaxed">
          Each row below is a complete deployment option. Click the name to
          jump to the steps.
        </p>
        <PathsDecisionTable />
      </Section>

      {/* Prerequisite (only for B/C/D/E) */}
      <Section id="prerequisite" title="Prerequisite — Get Your Code Out of Canvas">
        <p className="mb-4 text-slate-800 leading-relaxed">
          Required for Options <strong>B, C, D, and E</strong>. (Option A —
          Share the Canvas Link — skips this entirely and uses Canvas's share
          URL directly.)
        </p>

        <Step num="Step 1">
          In your Canvas project, look for the <strong>code view</strong>{' '}
          toggle — it switches from the visual preview to the underlying code.
        </Step>

        <Step num="Step 2">
          Select <strong>all</strong> of the code, starting from{' '}
          <Code>{'<!DOCTYPE html>'}</Code> at the very top down to the closing{' '}
          <Code>{'</html>'}</Code> tag at the bottom. Copy it.
        </Step>

        <Step num="Step 3">
          <p className="mb-2">
            Open a <strong>plain text editor</strong> — not Word or Google Docs.
            Use one of these:
          </p>
          <p className="mb-0">
            <strong>Windows:</strong> Notepad (search for it in the Start menu)
            <br />
            <strong>Mac:</strong> TextEdit — but first go to Format → Make Plain
            Text
            <br />
            <strong>Either:</strong>{' '}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BA0C2F] underline underline-offset-2 hover:decoration-2"
            >
              VS Code
            </a>{' '}
            (free, and useful if you plan to do more of this)
          </p>
        </Step>

        <Step num="Step 4">
          Paste the code into the text editor. Save the file as{' '}
          <Code>index.html</Code>
        </Step>

        <Callout label="Important">
          The file must end in <Code>.html</Code>, not <Code>.txt</Code>. On
          Windows, make sure "Save as type" is set to "All Files" in Notepad,
          or it may silently add <Code>.txt</Code> to the end. If you see{' '}
          <Code>index.html.txt</Code> in your file explorer, rename it to
          remove the <Code>.txt</Code>.
        </Callout>
      </Section>

      {/* Option A — Share the Canvas Link */}
      <OptionSection {...PATHS[0]}>
        <p className="mb-4 text-slate-800 leading-relaxed">
          Gemini Canvas lets you publish your app as a link. The recipient
          clicks and sees your working app in their browser — no downloads, no
          hosting, no code extraction.
        </p>

        <Step num="Step 1">
          In your Canvas project, click <strong>Share</strong> (top-right
          corner). Gemini will generate a public URL.
        </Step>

        <Step num="Step 2">
          Copy the URL. It'll look like{' '}
          <Code>https://gemini.google.com/share/...</Code>
        </Step>

        <Step num="Step 3">
          Send it. Anyone with the link can open your app.
        </Step>

        <Callout label="Heads up">
          The viewer may be asked to sign into a Google account to see the
          share. You don't own the URL — it belongs to Google and could change
          or expire. For something you want to own and keep updating, use
          Option D or E.
        </Callout>

        <Callout label="Rule 1.6 note">
          While building in Canvas, don't paste real client facts into the
          chat. Your prompts go to Google's servers — treat Canvas like any
          other cloud tool under your confidentiality obligations.
        </Callout>

        <p className="text-slate-500 text-[0.95rem] mb-0">
          Claude Artifacts works similarly — look for a <strong>Publish</strong>{' '}
          button, which creates a public URL at <Code>claude.site</Code>.
        </p>
      </OptionSection>

      {/* Option B — Email the HTML File */}
      <OptionSection {...PATHS[1]}>
        <p className="mb-4 text-slate-800 leading-relaxed">
          Treat your app like any other file — attach it to an email and the
          recipient runs it on their own computer. No URL needed, no account
          needed, no public exposure.
        </p>

        <Step num="Prereq">
          You'll need an <Code>index.html</Code> file saved from{' '}
          <a
            href="#prerequisite"
            className="text-[#BA0C2F] underline underline-offset-2 hover:decoration-2"
          >
            Get Your Code Out of Canvas
          </a>{' '}
          above.
        </Step>

        <Step num="Step 1">
          Attach <Code>index.html</Code> to an email to the person you want to
          share it with.
        </Step>

        <Step num="Step 2">
          They save the attachment, double-click it, and it opens in their
          default browser. Works in Chrome, Safari, Edge, Firefox — any modern
          browser.
        </Step>

        <Callout label="When email won't work">
          Apps that need to call external services (like fetching live data)
          may be blocked by browser security when opened as a local file. If
          it worked in Canvas but not when opened from an email attachment,
          use Option D instead.
        </Callout>
      </OptionSection>

      {/* Option C — Run Locally */}
      <OptionSection {...PATHS[2]}>
        <p className="mb-4 text-slate-800 leading-relaxed">
          This is for testing on your own machine. Nobody else can see it.
        </p>

        <Step num="Prereq">
          You'll need an <Code>index.html</Code> file saved from{' '}
          <a
            href="#prerequisite"
            className="text-[#BA0C2F] underline underline-offset-2 hover:decoration-2"
          >
            Get Your Code Out of Canvas
          </a>{' '}
          above.
        </Step>

        <Step num="That's it">
          <strong>
            Double-click <Code>index.html</Code>
          </strong>{' '}
          in your file explorer. It will open in your default browser. Your
          app is now running.
        </Step>

        <p className="text-slate-500 text-[0.95rem] mb-0">
          The URL bar will show something like{' '}
          <Code>file:///C:/Users/you/Desktop/index.html</Code>. That's normal —
          your browser is reading the file directly from your computer, and
          nobody else can reach it.
        </p>
      </OptionSection>

      {/* Option D — Netlify Drop */}
      <OptionSection {...PATHS[3]}>
        <p className="mb-4 text-slate-800 leading-relaxed">
          Netlify Drop is the fastest way to get your app on a real public URL.
          No command line, no Git — drag-and-drop.
        </p>

        <Step num="Prereq">
          You'll need an <Code>index.html</Code> file saved from{' '}
          <a
            href="#prerequisite"
            className="text-[#BA0C2F] underline underline-offset-2 hover:decoration-2"
          >
            Get Your Code Out of Canvas
          </a>{' '}
          above.
        </Step>

        <Step num="Step 1">
          Create a new folder on your computer. Name it whatever you want —
          e.g., <Code>my-app</Code>. Put your <Code>index.html</Code> file
          inside it.
        </Step>

        <Step num="Step 2">
          Go to{' '}
          <a
            href="https://app.netlify.com/drop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BA0C2F] underline underline-offset-2 hover:decoration-2"
          >
            app.netlify.com/drop
          </a>
        </Step>

        <Step num="Step 3">
          <strong>Drag your entire folder</strong> into the upload area on the
          page — not just the HTML file, the folder containing it.
        </Step>

        <Step num="Step 4">
          Wait a few seconds. Netlify will give you a live URL like{' '}
          <Code>https://random-name-12345.netlify.app</Code>. Your app is now
          on the internet.
        </Step>

        <p className="text-slate-500 text-[0.95rem] mb-0">
          You can sign up for a free Netlify account to customize the URL,
          update the site later, or prevent it from expiring. Without an
          account, the site stays up temporarily. For more detail, read{' '}
          <a
            href="https://blog.julietedjere.com/posts/vibe-coding-how-to-host-websites-from-gemini-canvas-on-netlify-for-free"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BA0C2F] underline underline-offset-2 hover:decoration-2"
          >
            Juliet Edjere's guide
          </a>
          .
        </p>
      </OptionSection>

      {/* Option E — GitHub Pages */}
      <OptionSection {...PATHS[4]}>
        <p className="mb-4 text-slate-800 leading-relaxed">
          GitHub Pages gives you a permanent URL and the easiest way to keep
          updating your project over time. It takes a few more steps.
        </p>

        <Step num="Prereq">
          You'll need an <Code>index.html</Code> file saved from{' '}
          <a
            href="#prerequisite"
            className="text-[#BA0C2F] underline underline-offset-2 hover:decoration-2"
          >
            Get Your Code Out of Canvas
          </a>{' '}
          above.
        </Step>

        <Step num="Step 1">
          Create a free account at{' '}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BA0C2F] underline underline-offset-2 hover:decoration-2"
          >
            github.com
          </a>{' '}
          if you don't have one.
        </Step>

        <Step num="Step 2">
          Click the <strong>+</strong> icon in the top right and select{' '}
          <strong>New repository</strong>. Give it a name (e.g.,{' '}
          <Code>my-app</Code>). Set it to <strong>Public</strong>. Click{' '}
          <strong>Create repository</strong>.
        </Step>

        <Step num="Step 3">
          On the next page, look for the link that says{' '}
          <strong>"uploading an existing file"</strong> and click it. Drag
          your <Code>index.html</Code> file in and click{' '}
          <strong>Commit changes</strong>.
        </Step>

        <Step num="Step 4">
          Go to your repository's <strong>Settings</strong> tab. In the left
          sidebar, click <strong>Pages</strong>. Under "Source," select{' '}
          <strong>Deploy from a branch</strong>. Set the branch to{' '}
          <strong>main</strong> and the folder to <strong>/ (root)</strong>.
          Click <strong>Save</strong>.
        </Step>

        <Step num="Step 5">
          <p className="mb-2">Wait a minute or two. Your site will be live at:</p>
          <pre className="bg-slate-800 text-slate-200 px-4 py-3 rounded-md font-mono text-sm overflow-x-auto">
            <code>https://YOUR-USERNAME.github.io/my-app/</code>
          </pre>
        </Step>

        <Callout label="Updating your site">
          To update the app later, go to your repository on GitHub, click on{' '}
          <Code>index.html</Code>, click the pencil icon to edit, paste in
          your new code, and commit the changes. GitHub Pages will
          automatically redeploy within a couple minutes.
        </Callout>
      </OptionSection>

      {/* Troubleshooting */}
      <Section title="Troubleshooting">
        <h3 className="font-semibold text-[1.1rem] mt-5 mb-3 text-slate-900">
          My app looks broken or shows raw code
        </h3>
        <p className="mb-4 text-slate-800 leading-relaxed">
          Your file probably saved as <Code>.txt</Code> instead of{' '}
          <Code>.html</Code>. Rename it so it ends in <Code>.html</Code> and
          try opening it again.
        </p>

        <h3 className="font-semibold text-[1.1rem] mt-5 mb-3 text-slate-900">
          My app worked in Canvas but not locally
        </h3>
        <p className="mb-4 text-slate-800 leading-relaxed">
          Some apps call external APIs or load resources that require a web
          server. Try Option D or E instead — hosting on a real URL often
          fixes the problem.
        </p>

        <h3 className="font-semibold text-[1.1rem] mt-5 mb-3 text-slate-900">
          My app uses React or other libraries
        </h3>
        <p className="mb-4 text-slate-800 leading-relaxed">
          If Gemini Canvas included libraries like React via CDN links (you'll
          see <Code>{'<script src="https://...">'}</Code> tags in the code),
          those will load automatically as long as you have an internet
          connection. The same single-file approach works — no extra setup
          needed.
        </p>

        <h3 className="font-semibold text-[1.1rem] mt-5 mb-3 text-slate-900">
          I want to make changes to my app
        </h3>
        <p className="mb-4 text-slate-800 leading-relaxed">
          You can go back to Gemini Canvas and iterate there, then re-copy the
          code. Or open <Code>index.html</Code> in a text editor and make
          changes directly. You can also paste the code into another AI tool
          (like Claude) and ask it to modify things for you.
        </p>
      </Section>

      {/* Footer */}
      <div className="border-t-2 border-slate-900 pt-5 mt-12">
        <p className="text-sm text-slate-500">
          Have questions? Reach out to the session lead.
        </p>
      </div>
    </div>
  );
}

/* ── Reusable sub-components ── */

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-10 scroll-mt-6">
      <h2 className="font-[BioRhyme,serif] text-xl font-bold pb-2 mb-4 border-b border-slate-200">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Step({ num, children }) {
  return (
    <div className="bg-slate-50 border-l-[3px] border-[#BA0C2F] rounded-r-md px-5 py-4 my-4">
      <span className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#BA0C2F] block mb-1">
        {num}
      </span>
      <div className="text-slate-800 leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
        {typeof children === 'string' ? <p>{children}</p> : children}
      </div>
    </div>
  );
}

function Callout({ label, children }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-md px-5 py-4 my-5">
      <p className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#BA0C2F] mb-1">
        {label}
      </p>
      <p className="text-slate-800 text-[0.95rem] leading-relaxed">{children}</p>
    </div>
  );
}

function Code({ children }) {
  return (
    <code className="font-mono text-[0.88em] bg-red-50 text-[#BA0C2F] px-1.5 py-0.5 rounded">
      {children}
    </code>
  );
}

function PathsDecisionTable() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="overflow-x-auto my-3 rounded-md border border-slate-200">
      <table className="w-full text-[0.95rem] border-collapse">
        <thead className="bg-slate-50">
          <tr>
            <th className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-slate-500 font-medium text-left px-3 py-2.5 border-b border-slate-200">
              Option
            </th>
            <th className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-slate-500 font-medium text-left px-3 py-2.5 border-b border-slate-200">
              Speed
            </th>
            <th className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-slate-500 font-medium text-left px-3 py-2.5 border-b border-slate-200">
              Who sees it?
            </th>
            <th className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-slate-500 font-medium text-left px-3 py-2.5 border-b border-slate-200">
              Best for
            </th>
          </tr>
        </thead>
        <tbody>
          {PATHS.map((p, i) => (
            <tr
              key={p.id}
              className={i === PATHS.length - 1 ? '' : 'border-b border-slate-100'}
            >
              <td className="px-3 py-3 align-top">
                <button
                  type="button"
                  onClick={() => scrollTo(p.id)}
                  className="text-left font-semibold text-slate-900 hover:underline decoration-2 underline-offset-2 cursor-pointer"
                  style={{ textDecorationColor: p.accent }}
                >
                  <span
                    className="inline-block w-5 h-5 rounded-full text-white text-[0.7rem] font-bold mr-2 text-center leading-5 align-[-2px]"
                    style={{ background: p.accent }}
                    aria-hidden="true"
                  >
                    {p.letter}
                  </span>
                  {p.title}
                  <span aria-hidden="true" className="ml-1 text-slate-400">↓</span>
                </button>
              </td>
              <td className="px-3 py-3 align-top text-slate-700 whitespace-nowrap">
                {p.speed}
              </td>
              <td className="px-3 py-3 align-top text-slate-700">{p.whoSeesIt}</td>
              <td className="px-3 py-3 align-top text-slate-700">{p.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OptionSection({ id, letter, accent, title, subtitle, badges, children }) {
  return (
    <section
      id={id}
      className="mb-10 rounded-lg overflow-hidden border border-slate-200 bg-white scroll-mt-6"
      style={{ borderTop: `6px solid ${accent}` }}
    >
      <div
        className="px-5 sm:px-6 py-5"
        style={{ background: `${accent}0D` }}
      >
        <div className="flex items-start gap-4">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-[BioRhyme,serif] text-2xl font-extrabold text-white shadow-sm"
            style={{ background: accent }}
          >
            {letter}
          </div>
          <div className="min-w-0 pt-0.5">
            <p
              className="font-mono text-[0.7rem] uppercase tracking-[0.15em] font-medium mb-1"
              style={{ color: accent }}
            >
              Option {letter}
            </p>
            <h2 className="font-[BioRhyme,serif] text-xl sm:text-2xl font-bold leading-tight text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="text-slate-600 text-[0.95rem] leading-snug mt-2">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pl-16">
            {badges.map((badge, i) => (
              <span
                key={i}
                className="inline-block text-[0.72rem] font-mono uppercase tracking-[0.08em] px-2 py-1 rounded-full bg-white border border-slate-200 text-slate-700"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="px-5 sm:px-6 py-5">{children}</div>
    </section>
  );
}
