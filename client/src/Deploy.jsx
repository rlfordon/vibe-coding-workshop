export default function Deploy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10 pb-6 border-b-[3px] border-slate-900">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#BA0C2F] mb-3">
          Quick Reference Guide
        </p>
        <h1 className="font-[BioRhyme,serif] text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
          Deploy Your <em className="text-[#BA0C2F] italic">Vibe-Coded</em> App
        </h1>
        <p className="text-slate-500 text-[1.05rem] max-w-[540px]">
          You built something in Gemini Canvas. Here's how to get it running on
          your own computer or published to an actual website — no coding
          experience required.
        </p>
      </div>

      {/* 00 — The Big Picture */}
      <Section number="00" title="The Big Picture">
        <p className="mb-4 text-slate-800 leading-relaxed">
          What you built in Gemini Canvas is a single HTML file. That file
          contains everything your app needs — the structure, the styling, and
          the logic. Because it's self-contained, deploying it is surprisingly
          simple. You have two options:
        </p>
        <ComparisonTable
          headers={['Option', 'What It Does', 'Best For']}
          rows={[
            [
              'Run Locally',
              'Opens in your browser like a regular webpage, but only on your machine',
              'Testing, personal use, demos on your laptop',
            ],
            [
              'Host on a Website',
              'Publishes to a real URL anyone can visit',
              'Sharing with others, portfolio pieces, class presentations',
            ],
          ]}
        />
      </Section>

      {/* 01 — Get Your Code */}
      <Section number="01" title="Get Your Code Out of Gemini Canvas">
        <p className="mb-4 text-slate-800 leading-relaxed">
          Before you can do anything, you need to copy the raw HTML code from
          Canvas.
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
          The file must end in <Code>. html</Code>, not <Code>.txt</Code>. On
          Windows, make sure "Save as type" is set to "All Files" in Notepad, or
          it may silently add <Code>.txt</Code> to the end. If you see{' '}
          <Code>index.html.txt</Code> in your file explorer, rename it to remove
          the <Code>.txt</Code>.
        </Callout>
      </Section>

      {/* 02 — Run Locally */}
      <Section number="02" title="Option A — Run It Locally">
        <p className="mb-4 text-slate-800 leading-relaxed">
          This is the fastest way to see your app in action. It's literally one
          step.
        </p>

        <Step num="That's it">
          <strong>
            Double-click <Code>index.html</Code>
          </strong>{' '}
          in your file explorer. It will open in your default browser. Your app
          is now running.
        </Step>

        <p className="text-slate-500 text-[0.95rem] mb-4">
          The URL bar will show something like{' '}
          <Code>file:///C:/Users/you/Desktop/index.html</Code>. This is normal —
          it's reading the file directly from your computer. No one else can
          access it.
        </p>

        <h3 className="font-semibold text-[1.1rem] mt-6 mb-3 text-slate-900">
          When local won't work
        </h3>
        <p className="mb-4 text-slate-800 leading-relaxed">
          Some apps that make API calls to external services (like fetching live
          data) may not work when opened as a local file due to browser security
          restrictions. If your app seems broken locally but worked in Canvas,
          this is probably why. Jump to Option B instead.
        </p>
      </Section>

      {/* 03 — Netlify Drop */}
      <Section number="03" title="Option B — Publish With Netlify Drop">
        <p className="mb-4 text-slate-800 leading-relaxed">
          Netlify Drop is the fastest way to get your app on a real URL. No
          command line, no Git, no technical setup. It's drag-and-drop.
        </p>

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
          page. Not just the HTML file — the folder containing it.
        </Step>

        <Step num="Step 4">
          Wait a few seconds. Netlify will give you a live URL like{' '}
          <Code>https://random-name-12345.netlify.app</Code>. Your app is now on
          the internet.
        </Step>

        <p className="text-slate-500 text-[0.95rem] mb-4">
          You can sign up for a free Netlify account to customize the URL, update
          the site later, or prevent it from expiring. Without an account, the
          site stays up temporarily.
        </p>
      </Section>

      {/* 04 — GitHub Pages */}
      <Section number="04" title="Option C — Publish With GitHub Pages">
        <p className="mb-4 text-slate-800 leading-relaxed">
          GitHub Pages gives you a permanent, free URL and is great if you want
          to keep updating your project over time. It requires a few more steps.
        </p>

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
          <strong>"uploading an existing file"</strong> and click it. Drag your{' '}
          <Code>index.html</Code> file in and click{' '}
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
          <Code>index.html</Code>, click the pencil icon to edit, paste in your
          new code, and commit the changes. GitHub Pages will automatically
          redeploy within a couple minutes.
        </Callout>
      </Section>

      <hr className="border-t border-slate-200 my-10" />

      {/* Which Should I Use */}
      <Section title="Which Should I Use?">
        <ComparisonTable
          headers={['', 'Local', 'Netlify Drop', 'GitHub Pages']}
          rows={[
            ['Speed', 'Instant', '~30 seconds', '~5 minutes'],
            ['Shareable URL', 'No', 'Yes', 'Yes'],
            ['Account needed', 'No', 'Optional', 'Yes (free)'],
            [
              'Easy updates',
              'Just edit the file',
              'Re-drag the folder',
              'Edit on GitHub',
            ],
            ['Stays up forever', 'N/A', 'With account', 'Yes'],
          ]}
        />
        <p className="mb-4 text-slate-800 leading-relaxed">
          For a quick demo or class presentation, go local. For sharing a link
          with classmates or a professor, Netlify Drop is the fastest. For
          something you want to keep in your portfolio, GitHub Pages gives you
          the most control.
        </p>
      </Section>

      {/* Troubleshooting */}
      <Section title="Troubleshooting">
        <h3 className="font-semibold text-[1.1rem] mt-5 mb-3 text-slate-900">
          My app looks broken or shows raw code
        </h3>
        <p className="mb-4 text-slate-800 leading-relaxed">
          Your file probably saved as <Code>.txt</Code> instead of{' '}
          <Code>.html</Code>. Rename it so it ends in <Code>.html</Code> and try
          opening it again.
        </p>

        <h3 className="font-semibold text-[1.1rem] mt-5 mb-3 text-slate-900">
          My app worked in Canvas but not locally
        </h3>
        <p className="mb-4 text-slate-800 leading-relaxed">
          Some apps call external APIs or load resources that require a web
          server. Try hosting it on Netlify or GitHub Pages instead — this often
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
          Have questions? Reach out to your instructor. For a deeper dive on this
          workflow, see Juliet Edjere's guide:{' '}
          <a
            href="https://blog.julietedjere.com/posts/vibe-coding-how-to-host-websites-from-gemini-canvas-on-netlify-for-free"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BA0C2F] underline underline-offset-2 hover:decoration-2"
          >
            Vibe Coding: From Prompt to Prototype with Gemini Canvas and Netlify
          </a>
          .
        </p>
      </div>
    </div>
  );
}

/* ── Reusable sub-components ── */

function Section({ number, title, children }) {
  return (
    <section className="mb-10">
      <h2 className="font-[BioRhyme,serif] text-xl font-bold pb-2 mb-4 border-b border-slate-200">
        {number && (
          <span className="font-mono text-xs text-[#BA0C2F] mr-2 align-[2px]">
            {number}
          </span>
        )}
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

function ComparisonTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-5">
      <table className="w-full text-[0.95rem] border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-slate-500 font-medium text-left px-3 py-2 border-b-2 border-slate-900"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-3 py-2 border-b border-slate-100 align-top ${
                    ci === 0 ? 'font-medium' : ''
                  } ${ri === rows.length - 1 ? 'border-b-0' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
