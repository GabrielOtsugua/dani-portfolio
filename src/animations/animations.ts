import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (target: string, delay: number, duration: number) => {
  gsap.from(target, { opacity: 0, delay: delay, duration: duration });
};

export const cascade = (target: string) => {
  gsap.from(target, { y: -16, opacity: 0, stagger: 0.5 });
};

export const cascadeScroll = (target: string) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: "top center",
    },
    y: -16,
    opacity: 0,
    stagger: 0.5,
  });
};

export const slideDown = (target: string, delay: number) => {
  gsap.from(target, { y: -32, opacity: 0, delay: delay });
};

export const slideRightScroll = (target: string, delay: number) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: "top center",
    },
    x: -32,
    opacity: 0,
    delay: delay,
  });
};

export const slideLeftScroll = (target: string, delay: number) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: "top center",
    },
    x: 32,
    opacity: 0,
    delay: delay,
  });
};

export const slideDownScroll = (target: string, delay: number) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: "top center",
    },
    y: -32,
    opacity: 0,
    delay: delay,
  });
};
