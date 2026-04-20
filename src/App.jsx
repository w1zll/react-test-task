import React from 'react';
import Header from './widgets/header/Header';
import { Outlet } from 'react-router';
import { page } from './shared/ui/styles/shared.styles';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header className="App-header" />
      <main className={`${page.wrapper} relative`}>
        <Outlet />
      </main>
    </div>
  );
}
