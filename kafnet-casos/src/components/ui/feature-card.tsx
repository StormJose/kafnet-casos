interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="
      h-full rounded-xl border border-gray-200 bg-white p-8
      shadow-sm flex flex-col gap-6
    ">
      <h3 className="text-xl font-semibold">{feature.title}</h3>

      <p className="text-gray-600 leading-relaxed">
        {feature.description}
      </p>

      <ul className="mt-auto space-y-2 text-sm text-gray-700">
        {feature.bullets.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#db324b]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
