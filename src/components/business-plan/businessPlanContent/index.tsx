"use client";

import { useEffect, useRef, useState } from "react";
import { getBusinessPlan } from "@/app/business-plan/actions";
import BackToBusinessPlan from "./BackToBusinessPlan";
import ReactMarkdown from "react-markdown";
import BusinessPlanHeader from "./BusinessPlanHeader";

const BusinessPlanContent = ({
  content,
}: {
  content: Awaited<ReturnType<typeof getBusinessPlan>>;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showBottomLink, setShowBottomLink] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (contentRef.current) {
        const hasScroll = contentRef.current.scrollHeight > window.innerHeight;
        setShowBottomLink(hasScroll);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <div className="mt-10" ref={contentRef}>
      <BackToBusinessPlan />
      <BusinessPlanHeader data={content.data} />
      <ReactMarkdown
        components={{
          p: (props) => <p className="my-4" {...props} />,
          li: (props) => <li className="my-2" {...props} />,
          hr: () => <hr className="my-6" />,
          pre: (props) => <pre className="my-6" {...props} />,
        }}>
        {content.content}
      </ReactMarkdown>
      {showBottomLink && (
        <div className="mt-8">
          <BackToBusinessPlan />
        </div>
      )}
    </div>
  );
};

export default BusinessPlanContent;
