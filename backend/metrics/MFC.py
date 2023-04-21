

def MFC_calculation(data, centers, mapping):
	"""
	Checks fairness for each of the clusters defined by k-centers.
	Returns balance using the total and class counts.
	
	Args:
		data (list)
		centers (list)
		mapping (list) : tuples of the form (data, center)
		
	Returns:
		fair (dict) : key=center, value=(sum of 1's corresponding to fairness variable, number of points in center)
	"""
	fair = dict([(i, [0, 0]) for i in centers])
	for i in mapping:
		fair[i[1]][1] += 1
		if data[i[0]][0] == 1: # MARITAL
			fair[i[1]][0] += 1
