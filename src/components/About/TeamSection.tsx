import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, GraduationCap } from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card';
import { Button } from '../ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { teamData, universityData } from '../../data/team-data';
import { Separator } from '../ui/separator';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const TeamSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Tim Pengembang</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Kami adalah mahasiswa UIN Saizu Purwokerto yang berkolaborasi untuk menciptakan platform pembelajaran tenses bahasa Inggris yang interaktif.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {teamData.map((member, index) => (
          <motion.div key={member.id} variants={item}>
            <Card className="h-full overflow-hidden group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 flex items-center gap-2 mb-1">
                  <Mail className="h-4 w-4" />
                  <span>{member.email}</span>
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a href={member.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>Contact via WhatsApp</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <Separator className="my-12" />
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span>Universitas Kami</span>
          </h2>
          <h3 className="text-xl font-semibold mb-3">{universityData.name}</h3>
          <p className="text-gray-600 mb-6">{universityData.address}</p>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline" asChild>
                <a 
                  href={universityData.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Kunjungi Website Universitas</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <AvatarFallback>UIN</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{universityData.name}</h4>
                  <p className="text-sm">
                    Universitas Islam Negeri dengan berbagai program studi unggulan.
                  </p>
                  <div className="flex items-center pt-2">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    <span className="text-xs text-blue-500 hover:underline">
                      {universityData.website.replace('https://', '')}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        
     <div className="overflow-hidden rounded-lg shadow-md">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.273106855411!2d109.2540163!3d-7.4260484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655c7123a900e5%3A0xd3e741481d0e338!2sUIN%20Saizu%20Purwokerto!5e0!3m2!1sen!2sid!4v1699555148256!5m2!1sen!2sid" 
    width="100%" 
    height="400" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="UIN Saizu Purwokerto Map">
  </iframe>
</div>
</motion.div>
</div>
);
};

export default TeamSection;
