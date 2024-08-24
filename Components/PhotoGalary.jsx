import React from 'react';

const ProfileGallery = ({Name}) => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/1b4b7287-d3c7-4e54-a68c-f03f2dcf5888.png")',
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                 {Name}
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {[
            "https://cdn.usegalileo.ai/stability/09a5dddc-e68b-4ad8-934e-794a1dc4491a.png",
            "https://cdn.usegalileo.ai/sdxl10/cd55dab1-da92-4a4b-89e8-839d7580cc35.png",
            "https://cdn.usegalileo.ai/sdxl10/667f14f5-5817-41c5-8c32-d0dc562f3de7.png",
            "https://cdn.usegalileo.ai/sdxl10/27570284-b350-4a69-811d-5329e48be889.png",
            "https://cdn.usegalileo.ai/sdxl10/571600ee-555e-4df7-b86f-8a1b50893994.png",
            "https://cdn.usegalileo.ai/sdxl10/85bc7e86-0b68-400f-b1c4-6b24054a2a13.png",
            "https://cdn.usegalileo.ai/stability/0660747f-fbb4-4fcd-9e5c-4e060b3d66bc.png",
            "https://cdn.usegalileo.ai/sdxl10/26e8d32c-c24a-4056-b57e-6147f293d4df.png",
            "https://cdn.usegalileo.ai/sdxl10/6ab46480-a135-428d-aa8a-3b371003aba6.png",
            "https://cdn.usegalileo.ai/sdxl10/44b65ebb-6016-467e-aa9e-e0c93bd17bb6.png",
          ].map((image, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileGallery;
