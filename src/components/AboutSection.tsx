
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider">About Us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Our Journey in Travel Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Welcome to Positive Travel and Holidays</h3>
            <p className="text-muted-foreground mb-6">
              Under the visionary leadership of Mr. Nazer EP, Positive Travel and Holidays has emerged as a trusted name in the travel industry. With years of experience and deep industry knowledge, Mr. Nazer EP has built a company dedicated to creating exceptional travel experiences.
            </p>
            <p className="text-muted-foreground">
              Our success is built on our commitment to excellence and our dedicated 24/7 support team, ensuring that our customers receive seamless assistance whenever they need it. We take pride in turning travel dreams into reality with personalized service and attention to detail.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-muted-foreground">
                To provide extraordinary travel experiences while ensuring customer satisfaction through our 24/7 dedicated support and personalized service.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
              <p className="text-muted-foreground">
                Our team is available round the clock to assist you with any queries or support you need during your journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
