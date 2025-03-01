const Loading = () => {
  return (
    <div className="flex fixed size-full z-50 items-center justify-center bg-white/75 inset-0 h-screen w-screen">
      <p className="text-5xl font-thin">L</p>
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-600" />
      <p className="text-5xl font-thin">ading...</p>
    </div>
  );
};

export default Loading;
