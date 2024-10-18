**PhotoFusion-AI**

PhotoFusion-AI is a powerful, AI-enhanced Software-as-a-Service (SaaS) platform built with Next.js, TypeScript, and TailwindCSS. It offers AI-powered photo restoration and recoloring features through Cloudinary and manages credits-based premium access using Stripe. Additionally, secure authentication is implemented with Clerk to ensure seamless user onboarding and account security.



**Features**
✨ AI-Powered Image Tools

**Image Restoration**: Enhance old or damaged images using Cloudinary’s AI.
Recoloring: Effortlessly recolor black-and-white photos with Cloudinary.
💳 Credits-Based Payment System

**Integrated Stripe** for secure payments, allowing users to buy credits and access premium features.
🔑 Secure Authentication & Authorization

**Clerk integration** provides user authentication, ensuring secure access and management of accounts.
⚡ Server-Side Rendering (SSR)

**Built using Next.js** to enable fast SSR for improved SEO and performance.
🎨 Modern, Responsive UI

Developed a sleek, user-friendly interface with **TailwindCSS**, ensuring consistency across all devices.
🔗 Cloudinary Integration

Seamless image storage, transformation, and AI-powered manipulation via Cloudinary APIs.
📊 Admin Dashboard

Admins can track user activity, credits balance, and payments.










**Tech Stack**


Technology	Description
**Next.js	Framework** for React, enabling SSR and routing
**TypeScript**	Strongly-typed JavaScript for safer development
**TailwindCSS**	Utility-first CSS framework for rapid UI styling
**MongoDB**	NoSQL database for storing user and image data
**Cloudinary**	Provides AI-powered image tools and transformations
**Stripe**	Payment gateway for secure purchase of credits
**Clerk	Authentication** and user management service



**Installation & Setup**

Follow these steps to clone and run the project locally.

Prerequisites
Node.js installed (version >= 14.x)
MongoDB Atlas account or local MongoDB setup
Cloudinary account with API keys
Stripe account with API keys
Clerk account for authentication

**Clone the repository**

git clone https://github.com/your-username/Imagify-AI.git
cd Imagify-AI



**Configure Environment Variables**

Create a **.env.local** file in the root directory with the following:

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your-cloudinary-api-key
NEXT_PUBLIC_CLOUDINARY_API_SECRET=your-cloudinary-api-secret

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key

MONGODB_URI=mongodb+srv://your-connection-string

NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
CLERK_API_KEY=your-clerk-api-key



**Run the Development Server**

npm run dev

Visit http://localhost:3000 to view the app in the browser.




**Here are most of the important pages which I made:**

**SIGN-IN PAGE**

![Screenshot 2024-10-18 232020](https://github.com/user-attachments/assets/19bb895f-c0ed-42e4-bfe4-5600c67dc685)













**CLERK AUTHENTICATION** 

![Screenshot 2024-10-18 231932](https://github.com/user-attachments/assets/145672aa-edea-455c-872e-0a005bdfb57c)















**HOME PAGE**:

![Screenshot 2024-10-18 232020](https://github.com/user-attachments/assets/07cded0a-19af-4daa-aea1-41285602a803)












**PROFILE PAGE:** This page will show the no of credits which is left 



![Screenshot 2024-10-18 232044](https://github.com/user-attachments/assets/c9d9d351-c957-43a6-9d71-2175c45fa128)


























**GENERATIVE FILL:**

![markuphero-YwYVkmGyjmct834hJCZG](https://github.com/user-attachments/assets/88bd627d-b011-4b7f-99e8-180091f20db9)
































**OBJECT RECOLOR:**

![markuphero-JdTeGYtqi0vpaULEMMy4](https://github.com/user-attachments/assets/aa0e655f-afee-49ae-9d52-13fcae00a548)






















**OBJECT REMOVAL:**

![markuphero-gcstnFHiid7OFQKN70MD](https://github.com/user-attachments/assets/8b1db675-1990-4d51-8034-47325ca8be4a)




















**BUY CREDITS:**



![markuphero-t2SneRjZGUMSHXP4UMIl](https://github.com/user-attachments/assets/f74aed79-c31d-4244-b9cb-83b503c669c8)






















**STRIPE PAYMENT GATEWAY:**




![markuphero-ML6Masfwxgydb6dGXnn5](https://github.com/user-attachments/assets/bb3180ae-c9af-4702-a6e3-db8eb8c89934)
