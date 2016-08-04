/**
 * Returns progress stored in user cache.
 * @return {int} Progress - percentage of threads processed.
 */
function getProgress() {
  var cache = CacheService.getUserCache();
  var progress = cache.get('progress');
  Logger.log('getProgress(): ' + progress)
  return progress;
}

/**
 * Stores progress to user cache.
 * @param {Int} progressPercent Pjercentage of threads processed.
 */
function setProgress(progressPercent) {
  var cache = CacheService.getUserCache();
  cache.put('progress', Math.round(progressPercent));
}

/**
 * Returns threadsLength stored in user cache.
 * @return {int} Number of threads to process.
 */
function getThreadsLength() {
  var cache = CacheService.getUserCache();
  var threadsLength = cache.get('threadsLength');
  return threadsLength;
}

/**
 * Stores threads to user cache.
 * @param {Int} threadsLengthh Number of threads to process.
 */
function setThreadsLength(threadsLength) {
  var cache = CacheService.getUserCache();
  cache.put('threadsLength', threadsLength);
}

/**
 * Returns progress data stored in user cache.
 * @return {<Object>} Progress data.
 * 
 * Example progress data object:
 * { threadsLengthh: 50,
 *   progress: 13,
 * } 
 */
function getProgressData() {
  var progressData = {};
  progressData.threadsLength = getThreadsLength();
  progressData.progress = getProgress();
  return progressData;
}

