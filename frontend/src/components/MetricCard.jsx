import { motion } from "framer-motion";

function MetricCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg"
    >
      <h3 className="text-zinc-400 text-sm">{title}</h3>

      <p className="text-2xl font-bold mt-2">{value}</p>
    </motion.div>
  );
}

export default MetricCard;
