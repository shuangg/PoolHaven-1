import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validationResult = insertContactSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      // Add timestamp to the submission
      const contactData = {
        ...validationResult.data,
        createdAt: new Date().toISOString()
      };
      
      // Store the contact submission
      const newSubmission = await storage.createContactSubmission(contactData);
      
      // Return success response
      return res.status(201).json({
        message: "Contact submission received",
        id: newSubmission.id
      });
    } catch (error) {
      console.error("Error processing contact submission:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Get all contact submissions (could be used for an admin panel)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      return res.status(200).json(submissions);
    } catch (error) {
      console.error("Error retrieving contact submissions:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
