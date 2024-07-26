// pages/info.tsx
"use client";

export default function InfoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-4">General Information</h1>
      <p className="text-lg">
        Welcome to the general information page. Here, you can find some basic
        details about our application and its features.
      </p>
      <p className="mt-4">
        This application is built using Next.js, a powerful framework for
        building server-rendered React applications. It offers various
        features like automatic code splitting, server-side rendering, and
        static site generation, which make it a great choice for modern web
        development.
      </p>
      <p className="mt-4">
        If you have any questions or need further information, feel free to
        contact us. We are here to help you!
      </p>
    </main>
  );
}
