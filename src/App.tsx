import Button from './components/tailus-ui/Button.tsx';
import { Display, Text, Title, Link, Kbd, Caption } from './components/tailus-ui/typography/index.ts';
import { Lock, Plus, Menu, X, Moon, Sun } from 'lucide-react';
import { BrandIcon } from './components/utilities/Brand.tsx';
import { useState, useEffect } from 'react';
import Separator from './components/tailus-ui/Separator.tsx';

const links = [
    { href: '/', label: 'Features' },
    { href: '/', label: 'Enterprise' },
    { href: '/', label: 'Docs' },
    { href: '/examples/pricing', label: 'Pricing' }
];

export function HeroSection1() {
    return (
        <>
            <SiteHeader />
            <main>
                <section className="pb-40 pt-32 lg:pt-16">
                    <div className="mx-auto max-w-6xl px-6">
                        <Display align="center" weight="bold" className="text-4xl md:text-5xl">
                            Ecommerce, Simplified
                        </Display>
                        <Text className="mx-auto mb-8 mt-6 max-w-2xl" size="lg" align="center">
                            Asperiores labore saepe veniam, quo in fugit? Consequuntur doloribus totam dolorem, nihil provident ratione nostrum lorem.
                        </Text>
                        <div className="flex justify-center gap-3">
                            <Button.Root href="/examples/forms/register1">
                                <Button.Label>Start Building</Button.Label>
                            </Button.Root>
                            <Button.Root variant="outlined" intent="gray" href="/examples/forms/register1">
                                <Button.Label>Learn More</Button.Label>
                            </Button.Root>
                        </div>
                        <Caption className="mb-8 mt-6" align="center">
                            Or Press <Kbd>G</Kbd> anytime to get started
                        </Caption>

                        <div data-rounded="2xlarge" className="mx-auto mb-12 mt-12 max-w-5xl rounded-[--card-radius] p-px shadow-xl shadow-gray-950/5 sm:mb-16 sm:mt-20 md:mb-20 dark:border-transparent dark:shadow-gray-950/50">
                            <div className="space-y-1 rounded-[calc(var(--card-radius)-1px)] border bg-[--ui-bg] p-1 backdrop-blur-2xl">
                                <div className="flex items-center justify-between px-3">
                                    <div className="flex gap-1.5">
                                        <div aria-hidden className="size-2.5 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                        <div aria-hidden className="size-2.5 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                        <div aria-hidden className="size-2.5 rounded-full border border-gray-300 bg-gray-200/50 dark:border-white/5 dark:bg-white/10"></div>
                                    </div>
                                    <div data-rounded="large" className="relative flex h-6 w-32 items-center justify-center gap-4 rounded-[--card-radius] bg-gray-200/50 px-3 text-xs text-[--caption-text-color] sm:w-56 dark:bg-[--ui-bg]">
                                        <Lock className="absolute left-3 size-2.5" />
                                        https://ui.tailus.io
                                    </div>
                                    <div className="flex size-6 rounded-full border bg-[--ui-bg]">
                                        <Plus aria-hidden className="m-auto size-4 text-[--caption-text-color]" />
                                    </div>
                                </div>
                                <img className="aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:hidden" src="/images/showcase/card.png" alt="" />
                                <img className="hidden aspect-[4/3] rounded-[calc(var(--card-radius)-5px)] border dark:block dark:border-white/5" src="/images/showcase/card-layout-dark.webp" alt="" />
                            </div>
                        </div>
                        <div className="mx-auto max-w-3xl">
                            <Title size="lg" align="center" as="div" weight="normal">
                                Trusted by your favorite top 10 Tech companies
                            </Title>
                            <Title as="h2" className="sr-only">
                                Customers
                            </Title>
                            <div className="mt-12 space-y-4 opacity-75">
                                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 brightness-0 grayscale sm:gap-x-12 md:gap-x-20 dark:invert">
                                    <img src="https://ampire.netlify.app/images/clients/lilly.png" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/coty.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/ge.svg" alt="" className="h-9 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/microsoft.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/airbnb.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/coty.svg" alt="" className="h-10 w-auto lg:hidden" />
                                    <img src="https://ampire.netlify.app/images/clients/ge.svg" alt="" className="h-9 w-auto lg:hidden" />
                                </div>
                                <div className="mt-12 hidden brightness-0 grayscale lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-20 dark:invert">
                                    <img src="https://ampire.netlify.app/images/clients/coty.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/ge.svg" alt="" className="h-9 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/microsoft.svg" alt="" className="h-10 w-auto" />
                                    <img src="https://ampire.netlify.app/images/clients/airbnb.svg" alt="" className="h-10 w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const root = document.querySelector('body') as HTMLElement;
        const navItems = document.querySelector('#navItems') as HTMLElement;

        if (isOpen) {
            navItems.style.setProperty('--nav-items-height', `${navItems.scrollHeight}px`);
            root.classList.add('overflow-hidden');
        } else {
            root.classList.remove('overflow-hidden');
            navItems.style.setProperty('--nav-items-height', '0px');
        }
    }, [isOpen]);
    return (
        <>
            <header data-state={isOpen ? 'open' : 'closed'} className="group feedback-bg fixed inset-x-0 z-10 border-b bg-white/50 backdrop-blur-3xl lg:relative lg:border-transparent dark:bg-gray-925/50">
                <div className="mx-auto max-w-6xl px-6 py-4 lg:flex lg:justify-between lg:py-12">
                    <div className="lg:flex lg:items-center lg:gap-8">
                        <div className="flex w-full items-center justify-between lg:w-fit">
                            <a href="/" aria-label="Tailus UI Logo">
                                <BrandIcon />
                            </a>
                            <div className="flex items-center gap-2 lg:hidden">
                                <Button.Root href="/examples/forms/login1" size="sm" intent="neutral">
                                    <Button.Label>Login</Button.Label>
                                </Button.Root>
                                <Separator orientation="vertical" className="h-3" />
                                <ThemeSwitcher size="sm" />
                                <Button.Root onClick={() => setIsOpen(!isOpen)} intent="gray" size="sm" variant="ghost" aria-label="toggle menu button" className="relative -mr-3 lg:hidden">
                                    <Button.Icon size="md" type="only" className="absolute inset-0 m-auto -rotate-90 scale-125 opacity-0 duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100">
                                        <X />
                                    </Button.Icon>
                                    <Button.Icon size="md" type="only" className="duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0">
                                        <Menu />
                                    </Button.Icon>
                                </Button.Root>
                            </div>
                        </div>
                        <nav id="navItems" className="hidden h-[--nav-items-height] w-full flex-col gap-8 overflow-hidden transition-[height] [--nav-items-height:0px] group-data-[state=open]:flex group-data-[state=open]:pb-4 group-data-[state=open]:pt-8 lg:flex lg:h-auto lg:w-fit lg:flex-row lg:py-0">
                            {links.map(({ href, label }) => (
                                <NavLink href={href}>{label}</NavLink>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden gap-6 lg:flex">
                        <Button.Root href="/examples/forms/login1" size="xs" intent="gray" variant="outlined">
                            <Button.Label>Login</Button.Label>
                        </Button.Root>

                        <ThemeSwitcher size="xs" />
                    </div>
                </div>
            </header>
            {isOpen && <div onClick={() => setIsOpen(false)} data-state={isOpen ? 'open' : 'closed'} className="fixed inset-0 z-[9] bg-white/50 data-[state=open]:animate-overlayShow lg:hidden dark:bg-[--overlay-bg]" aria-hidden data-aria-hidden="true" />}
        </>
    );
}

const NavLink = ({ href, children }) => <Link variant="plain" intent="gray" size="sm" href={href} children={children} />;

const ThemeSwitcher = ({ size = 'md' }: { size?: 'md' | 'sm' | 'xs' }) => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });

    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains('dark'));
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <Button.Root onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} variant="ghost" intent="gray" size={size} className="relative">
            <Button.Icon type="only" size={size} className="-rotate-180 scale-150 opacity-0 duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100">
                <Sun />
            </Button.Icon>
            <Button.Icon type="only" size={size} className="absolute inset-0 duration-300 dark:rotate-180 dark:scale-0 dark:opacity-0">
                <Moon />
            </Button.Icon>
        </Button.Root>
    );
};