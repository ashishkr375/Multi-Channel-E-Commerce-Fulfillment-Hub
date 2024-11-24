import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions for our Amazon SMBhav Hackathon Project" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[200]} variant="h5">
            What is the main goal of your project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our project aims to build a versatile tool or plug-in for seamless integration with Amazon's Multi-Channel Fulfillment (MCF) system. It helps e-commerce businesses manage inventory, orders, and shipments across different platforms like Amazon, Shopify, and custom websites from a single dashboard. The tool automates syncing product details, order status, and inventory levels, improving operational efficiency, reducing manual errors, and ensuring fast, reliable order fulfillment.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[200]} variant="h5">
            What is the tech stack used in your project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have selected a robust and scalable tech stack for our project:
            <ul>
              <li><strong>Frontend:</strong> Next.js, a React framework that allows us to build fast, user-friendly, and SEO-optimized web pages. It provides server-side rendering (SSR) and static site generation (SSG), ensuring high performance.</li>
              <li><strong>Backend:</strong> Node.js with Express.js for building APIs that integrate various e-commerce platforms like Amazon and Shopify. Express simplifies the server-side logic, while Node.js offers a scalable environment to handle high traffic loads.</li>
              <li><strong>AWS Services:</strong> We use AWS Lambda for running functions in a serverless environment, AWS RDS for relational databases, and AWS S3 for secure storage of data. AWS helps ensure scalability and reliability.</li>
              <li><strong>Containerization:</strong> Docker is used to package the application and its dependencies, making deployment consistent across environments.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[200]} variant="h5">
            How does the integration work between e-commerce platforms and Amazon MCF?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The integration works by syncing product listings, inventory, and order statuses between e-commerce platforms (like Shopify, custom websites) and Amazon’s Multi-Channel Fulfillment (MCF) system. Our tool ensures that product details, stock levels, and orders are updated in real-time across all connected platforms. The system uses Amazon's MCF API and a custom-built API layer to facilitate seamless data flow and ensure consistency.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[200]} variant="h5">
            What are the key benefits of using this solution for e-commerce businesses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li><strong>Centralized Control:</strong> Manage inventory, orders, and shipments across all platforms from one easy-to-use dashboard.</li>
              <li><strong>Real-Time Sync:</strong> Automatically sync product details, inventory, and orders in real-time, reducing discrepancies and errors.</li>
              <li><strong>Improved Efficiency:</strong> Automates manual processes like updating inventory and order status, saving time and reducing human error.</li>
              <li><strong>Cost-Effective:</strong> Leverages Amazon's logistical network to reduce shipping costs while ensuring fast and reliable order fulfillment.</li>
              <li><strong>Customer Satisfaction:</strong> Faster shipping and fewer errors improve customer satisfaction and retention.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[200]} variant="h5">
            How does the system ensure scalability and reliability?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Scalability and reliability are at the core of our system:
            <ul>
              <li><strong>AWS Infrastructure:</strong> By using AWS services like Lambda, RDS, and S3, we ensure that the system can handle growing volumes of orders and data. The cloud infrastructure is highly available and fault-tolerant, ensuring minimal downtime.</li>
              <li><strong>Containerization:</strong> Docker containers ensure consistent deployment across different environments, making scaling easier as demand increases.</li>
              <li><strong>Real-Time Data Syncing:</strong> The system's ability to sync data in real-time across all platforms reduces errors and ensures that businesses can operate seamlessly without any lag or downtime.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[200]} variant="h5">
            How does the system handle error reduction and ensure data accuracy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The system ensures data accuracy and minimizes errors through several features:
            <ul>
              <li><strong>Real-Time Syncing:</strong> Syncing product listings, inventory, and orders in real-time helps ensure that all platforms reflect accurate data and prevents stock discrepancies.</li>
              <li><strong>Error Notifications:</strong> The system automatically sends notifications if any issues arise, such as failed data sync or order fulfillment problems, ensuring immediate resolution.</li>
              <li><strong>Amazon's Robust Logistics:</strong> The integration leverages Amazon's fulfillment capabilities, which are reliable and ensure that orders are processed and shipped without issues.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[200]} variant="h5">
            What is the future outlook for this tool?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The future of this tool is highly promising:
            <ul>
              <li><strong>Platform Expansion:</strong> We plan to expand the tool to integrate with more e-commerce platforms, allowing businesses to connect even more sales channels.</li>
              <li><strong>AI Integration:</strong> In the future, we can integrate AI-based predictive analytics for inventory management, helping businesses anticipate demand and optimize stock levels.</li>
              <li><strong>Automation Enhancements:</strong> Further automation features will be added to improve supply chain management and order fulfillment processes.</li>
              <li><strong>Global Expansion:</strong> With the scalability of AWS and continuous improvements to the tool, we aim to offer the solution to businesses globally, catering to various market needs.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[200]} variant="h5">
            What makes your solution stand out from others in the market?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our solution stands out in several key ways:
            <ul>
              <li><strong>Customizable API Integration:</strong> Unlike other tools, we offer customizable API integration, allowing businesses to easily connect with any e-commerce platform of their choice.</li>
              <li><strong>Real-Time Updates:</strong> We prioritize real-time data syncing across all platforms, ensuring that businesses always have the latest inventory and order information.</li>
              <li><strong>AWS-Powered Infrastructure:</strong> The use of AWS ensures that our system is scalable, secure, and reliable, which is crucial for businesses with growing needs.</li>
              <li><strong>Ease of Use:</strong> Our user-friendly interface and automated syncing processes reduce the learning curve, making it easier for businesses to adopt and use the tool effectively.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default FAQ;
