import EnglishNavbar from "../English Header/EnglishNavbar";

import SentenceMaking from "./SentenceMaking";
import SyntaxNavbar from "../English Header/SyntaxNavbar";
import useLoadSentences from "../../components/customHook/useLoadSentences";

const Syntax = () => {
  const sentences = useLoadSentences();
  console.log(sentences);
  return (
    <div>
      <EnglishNavbar></EnglishNavbar>
      <SyntaxNavbar></SyntaxNavbar>
      {/* <SentenceMaking></SentenceMaking> */}
      <div>
        <p className="py-2">
          - ইংরেজীতে বাক্য গঠনের ব্যাপারে একটা মৌলিক ব্যাপার হল অনন্তকাল পর্যন্ত
          নতুন নতুন বাক্য গঠিত হতে থাকবে এবং পূর্বে একবারও না শোনার
          পরও মানুষ এগুলো বুঝতে পারবে।
        </p>
        <p className="py-2">
          -তাই মুখস্ত করে syntax পুরোটা আয়ত্ব করা সম্ভব নয় এবং প্রয়োজনও নেই।
        </p>
        <p className="py-2">-এজন্য যা করতে হবে তা হল প্রক্রিয়াটা আয়ত্ব করতে হবে।</p>
        <p  className="py-2">
          -এজন্য সীমিত কিছু বিষয় মুখস্ত করতে হবে আর কিছু বিষয় প্রাকটিস করতে হবে।
        </p>
        
        <p className="py-2">
          -sytax সম্পর্কিত কিছু terms ও concept আছে সেগুলো আয়ত্ব করতে হবে, কিছু
          sentence Structure আছে সেগুলো বারবার প্রাকটিস করতে হবে, কিছু
          transformation/converstion আছে সেগুলো কিছুদিন নিয়মিত চর্চা করে আয়ত্ব
          করতে হবে, কিছু common expression, proverb ও quotation আছে যেগুলো মুখস্ত রাখতে হবে।
        </p>
        <p className="py-2">
          যখন আত্মবিশ্বাসটা চলে আসবে তখন বাকী বিষয়টা পুরো জীবনব্যাপী
          অটোম্যাটিক/স্বয়ংক্রিয়ভাবে চলতে থাকবে।
        </p>
        <p className="py-2">
          ইংরেজী বাক্য গঠনের সময় শব্দ/শব্দবন্ধ (word/phrase) নির্বাচন একটি গুরুত্বপূর্ণ বিষয়। 
        </p>
        <p className="py-2">
          ইংরেজী বাক্যের অর্থ বের করার সময় কনটেক্সট, শব্দের বিভিন্ন অর্থের মধ্যে কোনটি বোঝাচ্ছে তা বুঝতে সহায়তা করে। 
        </p>
        <h1 className="text-xl font-bold">ভাষা শেখার কঠিন একটা ব্যাপার হল ১. contact-এ না আসা অর্থাৎ ভাষা শেখার যেসব বই বা উপকরণ ব্যবহার করা হয় সেগুলোতে অনেক কিছু না থাকায় একজন শিক্ষার্থী জানতেই পারেনা তাকে আর কী কী শিখতে হবে। </h1>
        <h1 className="text-xl font-bold">ভাষা শেখার কঠিন অন্য একটা ব্যাপার হল ২. কোনটা আগে শিখব না বুঝতে পারা। </h1>
        <h1 className="text-xl font-bold">ভাষা শেখার কঠিন অন্য একটা ব্যাপার হল কোনটা আগে শিখব না বুঝতে পারা। </h1>
        <h1 className="text-xl font-bold">Rephrasing, Paraphrasing and amplification ভাষা শেখার একটি গুরুত্বপূর্ণদিক। নিজের ভাষা সুন্দর করার জন্য, অন্যরা না বুঝতে পারলে তাকে বোঝানোর সুবিধার জন্য এটা নিয়মিত করতে হয়ে, এজন্য একই শব্দের সমার্থক শব্দ, বিপরীত শব্দ ও বাক্যের গঠন পরিবর্তন শিখতে হবে। </h1>
      </div>
    </div>
  );
};

export default Syntax;
