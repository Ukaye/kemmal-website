"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { StatCard } from "@/components/ui/Card";

export default function WhoWeAreSection() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              Who We Are
            </h2>
            <p className="text-text-light mb-6 leading-relaxed">
              The Kemmal Onuoha Company is a full-suite business management
              and strategy consulting firm dedicated to helping organizations
              strengthen their performance, develop capable teams, and design
              systems that scale.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="border-l-4 border-primary-gold pl-4">
                <p className="text-4xl font-bold text-primary-dark">20+</p>
                <p className="text-text-light text-sm">
                  Years Combined
                  <br />
                  Industry Experience
                </p>
              </div>
              <div className="border-l-4 border-primary-gold pl-4">
                <p className="text-4xl font-bold text-primary-dark">100+</p>
                <p className="text-text-light text-sm">
                  Businesses
                  <br />
                  Supported
                </p>
              </div>
            </div>

            <Link href="/who-we-are">
              <Button variant="secondary" size="md">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-bg-section relative">
              <Image
                src="/images/who-we-are/who-we-are-page-image1.jpg"
                alt="Kemmal Onuoha Company Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-gold/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

