import Links from '@/components/links'
import Blog from '@/components/sections/blog'
export default function Home() {
  return (
    <main className="font-base">
      <section>
        <h1 className="text-2xl font-heading sm:text-4xl">Wasimul Sami</h1>
        <p className="mt-2 text-lg sm:text-xl">I Can Code BTW</p>
        <div className="mt-8 text-base">
          <p className="text-base sm:text-lg">
            Just a man and his will to survive
          </p>
          <br />
          <p>
            I discovered programming at the age of 12 while adding custom blocks
            to my blogger website. I could add custom blocks with something called
            html and decorate them with something called css. I got the
            superpower, hehe.
          </p>
          <br />
          <p>
            I had to create a Jarvis like robot. After gliding on youtube, I found
            some videos where people made dummy Jarvis clones with python. And
            yep, I learned it. But I never actually built a Jarvis. Because by
            that time, I had also discovered Flask. While playing with it, I
            somehow moved on to django, idk why. I built some cool stuff with
            django, including my own social media platform {`"`}which had the
            potential to replace all other social media platforms{`"`}. I had to
            learn JavaScript first. And that thing was complete chaos. But I
            survived. Thanks to the new hot topic called React. I started playing
            with React because there were tons of cool libraries around it, and it
            was easy to add. I had already watched some videos on it anyway. Back
            then, I used bootstrap, but material ui always intrigued me. It had
            that fancy ripple effect on buttons. Most probably, I learned react
            just to use material.
          </p>
          <br />
          <p>
            I don{`'`}t remember what happened after that. Everything is a jumble.
          </p>
        </div>
      </section>

      <div className="mt-8">
        <Links />
      </div>

      <div className="mt-8">
        <Blog />
      </div>
    </main>
  )
}
