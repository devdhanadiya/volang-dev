"use client"

import { featuresList, wordList } from "@/data/HomeData"
import { HeroSection, FeatureCard, Button, Footer } from "@/components"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f9f6f0] to-[#f5f1e8] dark:from-background dark:to-background">

      <main className="flex-1">
        <HeroSection />

        <section id="features" className="container py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">
              All-in-One Language Platform
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to master a new language in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </section>

        <section id="journal" className="py-20 bg-muted/50 dark:bg-background/5">
          <div className="container grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">
                Personalized Vocabulary Journal
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Create your own customized journal of words you want to learn. Organize them by categories, difficulty,
                or language.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Save words with a single click</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Organize into custom collections</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Track your learning progress</span>
                </li>
              </ul>
              <div>
                <Button className="mt-4 shadow-neumorphic dark:shadow-neumorphic-dark">Start Your Journal</Button>
              </div>
            </div>
            <motion.div
              className="rounded-xl overflow-hidden shadow-neumorphic dark:shadow-neumorphic-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-video bg-background dark:bg-card rounded-xl p-6 flex items-center justify-center">
                <div className="w-full max-w-md space-y-4 p-6 rounded-lg bg-card dark:bg-card/80 shadow-neumorphic dark:shadow-neumorphic-dark">
                  <h3 className="text-xl font-semibold font-heading">My Vocabulary Journal</h3>
                  <div className="space-y-3">
                    {wordList.map((word) => (
                      <motion.div
                        key={word.word}
                        className="p-3 rounded-md bg-background dark:bg-background/40 shadow-neumorphic-inset dark:shadow-neumorphic-inset-dark flex justify-between items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="font-medium">{word.word}</span>
                        <span className="text-sm text-muted-foreground">{word.meaning}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="translator" className="container py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">Powerful Translation Tools</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Translate between multiple languages with context-aware accuracy.
            </p>
          </div>

          <motion.div
            className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-neumorphic dark:shadow-neumorphic-dark p-6 bg-card dark:bg-card/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">English</span>
                  <span className="text-sm text-muted-foreground">Auto-detected</span>
                </div>
                <motion.div
                  className="min-h-[150px] p-4 rounded-md bg-background dark:bg-background/40 shadow-neumorphic-inset dark:shadow-neumorphic-inset-dark"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p>The early bird catches the worm, but the second mouse gets the cheese.</p>
                </motion.div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Spanish</span>
                  <span className="text-sm text-primary cursor-pointer hover:underline">Change language</span>
                </div>
                <motion.div
                  className="min-h-[150px] p-4 rounded-md bg-background dark:bg-background/40 shadow-neumorphic-inset dark:shadow-neumorphic-inset-dark"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p>El pájaro madrugador atrapa el gusano, pero el segundo ratón se lleva el queso.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="bg-muted/50 dark:bg-background/5 py-20">
          <div className="container text-center space-y-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to master a new language?
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[600px] text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of language learners who are accelerating their progress with voLang.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="shadow-neumorphic dark:shadow-neumorphic-dark">
                  Get Started for Free
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="shadow-neumorphic dark:shadow-neumorphic-dark bg-background dark:bg-card/80"
                >
                  Take a Tour
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

