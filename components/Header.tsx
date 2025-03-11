'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { BookMarkedIcon, BookOpen, SquareLibrary } from 'lucide-react';
import DarkModeToggle from '@/components/DarkModeToggle';
import { Button } from '@/components/ui/button';
import SearchInput from '@/components/SearchInput';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              prefetch={false}
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                JTraining
              </span>
            </Link>

            <SearchInput />
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    asChild
                    active={pathname == '/knowledge-base'}
                  >
                    <Link href="/knowledge-base">
                      <SquareLibrary className="h-5 w-5 mr-2" />
                      Knowledge Base
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <nav>
              <SignedIn>
                <Link
                  prefetch={false}
                  href="/my-trainings"
                  className="flex space-x-2 items-center text-sm font-medium
                  text-muted-foreground hover:text-foreground transition-colors
                  md:border md:border-border md:rounded-md md:px-4 md:py-2"
                >
                  <BookMarkedIcon className="h-4 w-4" />
                  <span className="hidden md:block">My Trainings</span>
                </Link>
              </SignedIn>
            </nav>

            <DarkModeToggle />

            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="default">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
